
'use client'
import { getProducts } from '@/hooks/boutique'
import React, {useState, useEffect} from 'react'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import EditModal from '@/components/modals'
import Panier from './panier'
import { toast } from 'sonner'

type Props = {}
// Fetch data outside the component
const fetchData = async () => {
    return await getProducts();
  };
  
  const DisplayData = (props: Props) => {
    const [items, setItems] = useState([]);
    const [dataProducts, setDataProducts] = useState([]);
  
    const addItem = (e) => {
      toast.success('added');
      setItems([
        { price: e, quantity: 1 },
        ...items, // Put old items at the end
      ]);
    };
  
    useEffect(() => {
      const fetchDataAndSetState = async () => {
        const products = await fetchData();
        setDataProducts(products);
      };
  
      fetchDataAndSetState();
    }, []); // Fetch data once on component mount
  
    return (
      <>
        <div>
          {/* Check that we have products */}
          {dataProducts.length ? (
            <ul className='flex mt-20 gap-5 columns-3'>
              {/* Iterate over the dataProducts */}
              {dataProducts.map((product) => (
                <li key={product.id}>
                  {/* Note that we are using a form to post to the API we just created 
                                  Display the product image using the Next Image component */}
                  <Image
                    src={product.images[0]}
                    alt={`Image of ${product.name}`}
                    width={300}
                    height={300}
                    priority={true}
                  />
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <Button variant={'ghost'} onClick={() => addItem(product.default_price.toString())}>
                    Achetez
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div>No products</div>
          )}
          <EditModal
            icon={
              <Badge>
                <ShoppingCart />
                <span className='ml-2'>{items.length}</span>
              </Badge>
            }
            ModalSubComp={<Panier items={items} />}
            title={'Panier'}
          />
          <br />
        </div>
      </>
    );
  };
  
  export default DisplayData;
  