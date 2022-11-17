
import { For } from "solid-js/web";
import { Item } from "../../clover";
import Card from "~/components/Card";

export type InventoryProps = {
    items: Item[];
}

export default function Inventory(props) {

    return (
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-8">  
                <For each={props.items}>
                        {(item) => <Card item={item} />}
                </For>
            </div>
        </div>
    )
}