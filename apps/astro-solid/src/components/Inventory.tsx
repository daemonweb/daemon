import { OpenAPI, InventoryService, Item } from "../../clover";
import { Component, createSignal, onMount } from "solid-js";

OpenAPI.TOKEN = "7d0d2a09-d485-0c5b-7b4d-1c8eb227446e";
const _inventory = (await InventoryService.inventoryGetItems("X6A22CBB325M1")).elements as Item[];


const Inventory: Component = () => {

    const [inventory, setInventory] = createSignal(_inventory);

    onMount(() => {
        console.log(inventory());
    })

    return (
        <div>
            {inventory().map((item) => (
                <li class="bg-white p-4">
                    <span class="inline-block mb-2 text-lg font-bold">
                    {item.name}
                    </span>
                    <span class="inline-block mb-2">
                    Price: ${item.price}
                    </span>
                </li>
            ))}
        </div>
    );
}
/**
 * <For each={inventory()}>{(list) =>
                <li class="bg-white p-4">
                    <span class="inline-block mb-2 text-lg font-bold">
                    {list.name}
                    </span>
                    <span class="inline-block mb-2">
                    Country: {list.country}
                    </span>
                    <span class="inline-block mb-2">
                    City: {list.city}
                    </span>
                </li>}
            </For>
 * 
 */


export default Inventory;