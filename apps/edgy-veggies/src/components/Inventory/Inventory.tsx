import type { Item } from "../../../clover";
import { Component, createSignal, Suspense, For } from "solid-js";
import Card from "../Card";


export type InventoryProps = {
    items: Item[]
}

const Inventory: Component<InventoryProps> = (props) => {

    const [items] = createSignal(props.items);

    return (
        <Suspense>
            <div class="container mx-auto">
                <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-8">  
                    <For each={items()}> {item => <Card item={item}/>}</For>
                </div>
            </div>
        </Suspense>

    );
}


export default Inventory;