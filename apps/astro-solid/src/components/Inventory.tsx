import { OpenAPI, InventoryService, Item } from "../../clover";
import { Component, createSignal } from "solid-js";
import Card from "./Card";

OpenAPI.BASE = import.meta.env.CLOVER_BASE_URL;
OpenAPI.TOKEN = import.meta.env.CLOVER_API_KEY;
const _inventory = (await InventoryService.inventoryGetItems(
        import.meta.env.CLOVER_MERCHANT_ID
    ))
    .elements
    .filter((item: Item) => item.autoManage) as Item[];

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