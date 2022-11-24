import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { OpenAPI, InventoryService, Item, MerchantsService, OrderType } from "@clover-platform";
import Inventory from "~/components/Inventory";
import Navbar from "~/components/Navbar";
import { ModalProvider } from "~/components/ModalProvider";
import { CartProvider } from "~/components/CartProvider";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";
import { Drawer } from "~/components/Drawer";
import { Cart } from "~/components/Cart";
import { createSignal } from "solid-js";
import { it } from "node:test";





export function routeData() {
    return createServerData$(async () => {
        if(process.env.CLOVER_BASE_URL) {
          OpenAPI.BASE = process.env.CLOVER_BASE_URL;
        }
        
        OpenAPI.TOKEN = process.env.CLOVER_API_KEY;
        //const merchant = await MerchantsService.merchantGetMerchant(process.env.CLOVER_MERCHANT_ID);
        //console.log("merchant", merchant.name);
        //const hoursSet = await MerchantsService.merchantGetAllMerchantOpeningHours(process.env.CLOVER_MERCHANT_ID);
        //console.log("hoursSet", hoursSet.tuesday);
        //const address = await MerchantsService.merchantGetMerchantAddress(process.env.CLOVER_MERCHANT_ID);
        //console.log("address", address);
        const orderTypes = await getOrderTypes();
        console.log("orderTypes", orderTypes);

        const items = await getItems();
        return items;
    });
    
}

async function getItems(): Promise<Item[]> {
  return (await InventoryService.inventoryGetItems(process.env.CLOVER_MERCHANT_ID))
    .elements as Item[];  
}


async function getOrderTypes(): Promise<OrderType[]> {
  return (await MerchantsService.merchantGetOrderTypes(process.env.CLOVER_MERCHANT_ID))
    .elements
    .filter((ot) => {
      if(ot.id === "GTN4S03FBNC3J" || ot.id ==="TNQA7NACBFPJG" )
        return true;
    }) as OrderType[];  
}

export default function Home() {
  const items = useRouteData<typeof routeData>();
  //const [items] = createSignal([{name: "test", price: 300, id: "test"}]);

  return (
    <ModalProvider>
    <CartProvider>
    <Navbar />

      <Drawer sideContent={<Cart/>}>

        <Hero />
        <main class="container mt-8 lg:mt-16 mx-auto">
          <Inventory items={items()}/>
        </main> 

      </Drawer> 
      
    <Footer />
    </CartProvider>
    </ModalProvider>
  );
}