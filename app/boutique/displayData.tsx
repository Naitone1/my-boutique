
'use client'
import { PaiementProducts, getPrices, getProduct, getProducts } from '@/hooks/boutique'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
 


type Props = {}

const DisplayData = async (props: Props) => {
    const router = useRouter()

    const [items, setItems] = useState([])
    
    let dataPrices = await getPrices()
    
    let productid = async (e) => {
        let z = await getProduct('prod_OzfwawG4TweaV7')
        return z.images 
    }



    let addItem = (e) => {
        setItems([
            { price: e, quantity: 1 },
            ...items, // Put old items at the end
          ]);
    }

    let handleSubscription = async (e) => {
        console.log(e)
        let ez = await PaiementProducts(e)
        router.push(ez)
    }



    return (
        <div className='mt-20'>
            {dataPrices.map(e => {
                let id = e.id
                return (
            <div className='flex gap-4'>
                <p>{e.nickname}</p>
                <Image
                    src={productid(e.product)}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
                <p className='border-2 rounded-lg px-2'>{(e.unit_amount / 100)} €</p>
                <button onClick={() => addItem(id)}>
                    add
                </button>
            </div>)
            })}
             <Badge>
                <ShoppingCart /> 
                <span className='ml-2'>
                    {items.length}
                </span>
            </Badge>
            
            <br />
            <button onClick={() => handleSubscription(items)}>checkout</button>
        </div>
        
  )
}

export default DisplayData