import { useState, useEffect } from 'react';
import { PaiementProducts, getPrice } from '@/hooks/boutique';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type Props = {
    items: {
        price: string;
        quantity: number;
    }[];
};

const Panier = (props: Props) => {
    const router = useRouter();
    const [pricesItems, setPricesItems] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0);

    const getPrices = async () => {
        try {
            return await Promise.all(props.items.map(async item => {
                console.log(item);
                let price = await getPrice(item.price);
                // let price = 1;
                return { ...item, pricePoint: (Number(price)/100) };
            }));
        } catch (error) {
            // Handle errors, e.g., log the error or throw a new one
            console.error('Error updating prices:', error);
            return props.items; // Return the original array in case of an error
        }
    };

    useEffect(() => {
        getPrices().then(updatedItems => setPricesItems(updatedItems));

                    // Calculate the total price when pricesItems is updated
    }, [props.items]);

    
    let handleSubscription = async (e) => {
        let ez = await PaiementProducts(e)
        router.push(ez)
    }

    const sum = pricesItems.reduce((acc, item) => acc + (item.pricePoint || 0), 0);

    return (
        <>
            {pricesItems.length > 0 && pricesItems.map((item, index) => (
                <span className='flex' key={index}>
                    <p className='w-80'>{item.price}</p>
                    <p className='border-l-2 px-5'>{item.quantity}</p>
                    <p className='border-l-2 px-5'>{item.pricePoint} €</p>
                </span>
            ))}
            <Separator className='my-4'/>
            <p className='mb-5'>Total : {sum} €</p>
            <Button variant='default' onClick={() => handleSubscription(props.items)}>Commandez</Button>
        </>
    );
};

export default Panier;



