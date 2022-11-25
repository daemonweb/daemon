import { HiSolidMinusCircle, HiSolidPlusCircle, HiSolidCurrencyDollar } from "solid-icons/hi"
import type { Item }  from "@clover-platform";
import { useCart } from "./CartProvider";

function getItemThumbnailUrl(itemId: string | undefined): string {
    return "https://picsum.photos/120";
    return (itemId) 
        ? `https://cloverstatic.com/menu-assets/items/${itemId}_576x576.jpeg`
        : "https://picsum.photos/120"
}

function getPrice(price: Number): string {
    if(price < 100) {
        return "$0.00";
    }
    const rawString = price.toString();
    const i = rawString.length-2
    return `$${rawString.substring(0, i)}.${rawString.substring(i, rawString.length)}`
}

export type CardProps = {
    item: Item
}

export default function Product(props: CardProps) {
    const cart = useCart();

    return (
        <a /*href={product.href}*/ class="group">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                src={getItemThumbnailUrl(props.item.id)}
                //alt={product.imageAlt}
                class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{props.item.name}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{props.item.price}</p>
        </a>
    );
};

// <HiSolidCurrencyDollar /><p>{getPrice(props.item.price)}</p>
//                 <div class="card-actions justify-end align-center">
//                     <HiSolidMinusCircle />
//                     <span class="text-md">{cart.actions.getItemCount(props.item.name)}</span>
//                     <HiSolidPlusCircle />