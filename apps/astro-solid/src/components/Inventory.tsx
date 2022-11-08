import { OpenAPI, InventoryService, Item } from "../../clover";
import { Component, createSignal, onMount } from "solid-js";
import Card from "./Card";

OpenAPI.TOKEN = "7d0d2a09-d485-0c5b-7b4d-1c8eb227446e";
const _inventory = (await InventoryService.inventoryGetItems("X6A22CBB325M1")).elements as Item[];


const Inventory: Component = () => {

    const [inventory] = createSignal(_inventory);

    return (
        <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
            {inventory().map((item) => (
                <Card item={item}></Card>
            ))}
        </div>
        </div>
    );
}


export default Inventory;