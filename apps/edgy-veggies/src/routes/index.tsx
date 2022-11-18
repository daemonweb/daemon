import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { OpenAPI, InventoryService, Item } from "@clover-platform";
import Inventory from "~/components/Inventory";
import Navbar from "~/components/Navbar";


export function routeData() {
    return createServerData$(async () => {
        OpenAPI.BASE = process.env.CLOVER_BASE_URL;
        OpenAPI.TOKEN = process.env.CLOVER_API_KEY;
        return (await InventoryService.inventoryGetItems(
                process.env.CLOVER_MERCHANT_ID
            ))
            .elements
            .filter((item: Item) => item.autoManage) as Item[];
    });
}

export default function Home() {
  const items = useRouteData<typeof routeData>();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Navbar />
      <Inventory items={items()}/>
    </main>
  );
}