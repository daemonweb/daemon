
import { For } from "solid-js/web";
import { Item } from "@clover-platform";
import Card from "~/components/Card";

export type InventoryProps = {
    items: Item[];
}

export default function Inventory(props) {

    return (
        <div class="
            grid 
            gap-8 lg:gap-16
            grid-cols-1 md:grid-cols-2">  
            <For each={props.items}>
                    {(item) => <Card item={item} />}
            </For>
        </div>
    )
}