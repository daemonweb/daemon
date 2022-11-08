import type { Component } from "solid-js";
import type { Item } from "../../clover";

export type CardProps = {
    item: Item
}

const Card: Component<CardProps> = (props) => {
    return (
        <div class="card card-side h-56 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title">{props.item.name}</h2>
                <p>${props.item.cost}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;