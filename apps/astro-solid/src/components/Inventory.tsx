import type { Item } from "../../clover";
import { Component, createSignal } from "solid-js";
import Card from "./Card";


export type InventoryProps = {
    items: Item[]
}

const Inventory: Component<InventoryProps> = (props) => {

    const [items] = createSignal(props.items);

    return (
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-8">  
                {items().map((item) => (
                    <Card item={item}></Card>
                ))}
            </div>
        </div>
    );
}


export default Inventory;