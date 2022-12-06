import type { Item }  from "@clover-platform";
import { getLargeImageUrl } from "~/components/Ecommerce/Clover";
import { formatPrice } from "~/components/Ecommerce/utils";
import Counter from "./Counter";
import { useCart } from "~/components/Ecommerce";


export type ProductProps = {
    item: Item
}

export default function Product(props: ProductProps) {
    const cart = useCart();
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
                <p class="mt-1 text-lg font-medium text-gray-900">{`$${formatPrice(props.item.price)}`}</p>
                <Counter 
                    count={cart.actions.getItemCount(props.item.id)}
                    increment={() => cart.actions.addItems(props.item)}
                    decrement={() => cart.actions.removeItems(props.item)}/>
            </div>    
        </a>
    );
};

// <HiSolidCurrencyDollar /><p>{getPrice(props.item.price)}</p>
//                 <div class="card-actions justify-end align-center">
//                     <HiSolidMinusCircle />
//                     <span class="text-md">{cart.actions.getItemCount(props.item.name)}</span>
//                     <HiSolidPlusCircle />