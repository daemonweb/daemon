import type { Item }  from "@clover-platform";
import { getLargeImageUrl } from "~/services/Clover";
import Counter from "./Counter";
//import { useCart } from "./CartProvider";

function getPrice(price: Number): string {
    if(price < 100) {
        return "$0.00";
    }
    const rawString = price.toString();
    const i = rawString.length-2
    return `$${rawString.substring(0, i)}.${rawString.substring(i, rawString.length)}`
}

export type ProductProps = {
    item: Item
}

export default function Product(props: ProductProps) {
    //const cart = useCart();
    return (
        <a /*href={product.href}*/ class="group">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={getLargeImageUrl(props.item.id)}
                    //alt={product.imageAlt}
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{props.item.name}</h3>
            <div class="flex justify-between">
                <p class="mt-1 text-lg font-medium text-gray-900">{getPrice(props.item.price)}</p>
                <Counter />
            </div>    
        </a>
    );
};

// <HiSolidCurrencyDollar /><p>{getPrice(props.item.price)}</p>
//                 <div class="card-actions justify-end align-center">
//                     <HiSolidMinusCircle />
//                     <span class="text-md">{cart.actions.getItemCount(props.item.name)}</span>
//                     <HiSolidPlusCircle />