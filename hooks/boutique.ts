import { stripe } from "@/lib/prisma";

export async function getPrices() {
    const prices = await stripe.prices.list({
        limit : 4,
    });
    return prices.data.reverse()
}

export async function getPrice(priceId: string) {
    const price = await stripe.prices.retrieve(priceId);
    return price.unit_amount?.toFixed(2)
}
export async function getProducts() {
    const prices = await stripe.products.list({
        limit : 4,
    });
    return prices.data.reverse()
}

export async function getProduct(e) {
    const product = await stripe.products.retrieve(e)
    return product
}

export async function PaiementProducts(e) {
    console.log(e)
    const session = await stripe.checkout.sessions.create({
        line_items: e,
        mode:'payment',
        success_url:'http://localhost:3000/',
        cancel_url:'http://localhost:3000/boutique'
    })
    // console.log(session.url)
    return session.url
}