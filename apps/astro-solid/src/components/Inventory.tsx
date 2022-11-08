import { OpenAPI, InventoryService } from "../../clover";
import { Component } from "solid-js";

OpenAPI.TOKEN = "7d0d2a09-d485-0c5b-7b4d-1c8eb227446e";
const items = await InventoryService.inventoryGetItems("X6A22CBB325M1");

const onButtonPress = async () => {
    console.log(items);
}


const Inventory: Component = () => (
    <button onClick={onButtonPress}>Inventory Button</button>
)

export default Inventory;