import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { OpenAPI, InventoryService, Item } from "@clover-platform";
import Inventory from "~/components/Inventory";
import Navbar from "~/components/Navbar";
import { Modal, ModalProvider } from "~/components/Modal";


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
    <ModalProvider>
      <Navbar />
      <main class="container mt-8 lg:mt-16 mx-auto">
        <Inventory items={items()}/>
      </main> 
      <Modal /> 
    </ModalProvider>
  );
}
