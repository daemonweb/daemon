
import type { Item }  from "@clover-platform";
import { useModal } from "./Modal";

function getItemThumbnailUrl(itemId: string | undefined): string {
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

export default function Card(props: CardProps) {

    const modal = useModal();

    return (
        <div class="
            card card-side 
            h-64 md:h-56 lg:h-64
            bg-base-100 
            shadow-xl
        ">
            <figure class="
                h-full 
                w-1/2 md:w-2/5 lg:w-1/2 xl:w-3/5
            ">
                <div class="bg-cover bg-center" style={`background-image: url('${getItemThumbnailUrl(props.item.id)}');`}></div>
            </figure>
            <div class="
                card-body 
                card-normal md:card-compact xl:card-normal 
                w-1/2 md:w-3/5 lg:w-1/2 xl:w-2/5
            ">
                <h2 class="
                    card-title 
                    text-xl sm:text-2xl md:text-base lg:text-lg xl:text-xl
                ">
                    {props.item.name}
                </h2>
                <p>{getPrice(props.item.price)}</p>
                <div class="card-actions justify-end">
                    <button 
                        class="btn btn-primary"
                        onClick={() => modal.actions.open()}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};