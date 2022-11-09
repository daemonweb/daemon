import type { Component } from "solid-js";
import type { Item } from "../../clover";

export type CardProps = {
    item: Item
}

const getItemThumbnailUrl = (itemId: string | undefined): string => {
    return (itemId) 
        ? `https://cloverstatic.com/menu-assets/items/${itemId}_576x576.jpeg`
        : "https://picsum.photos/120"
}

const getPrice = (price: Number): string => {
    if(price < 100) {
        return "$0.00";
    }
    const rawString = price.toString();
    const i = rawString.length-2
    return `$${rawString.substring(0, i)}.${rawString.substring(i, rawString.length)}`
}

const Card: Component<CardProps> = (props) => {
    return (
        <div class="card card-side h-48 bg-base-100 shadow-xl">
            <figure class="h-full w-48">
                <div class="bg-cover bg-center" style={`background-image: url('${getItemThumbnailUrl(props.item.id)}');`}></div>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{props.item.name}</h2>
                <p>{getPrice(props.item.price)}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-green">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;