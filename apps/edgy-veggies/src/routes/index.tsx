import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { OpenAPI, InventoryService, Item, MerchantsService } from "@clover-platform";
import Inventory from "~/components/Inventory";
import Navbar from "~/components/Navbar";
import { ModalProvider } from "~/components/ModalProvider";
import { CartProvider } from "~/components/CartProvider";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";
import { Drawer } from "~/components/Drawer";
import { Cart } from "~/components/Cart";


export function routeData() {
  
    return createServerData$(async () => {
        OpenAPI.BASE = process.env.CLOVER_BASE_URL;
        OpenAPI.TOKEN = process.env.CLOVER_API_KEY;
        const merchant = await MerchantsService.merchantGetMerchant(process.env.CLOVER_MERCHANT_ID);
        //console.log("merchant", merchant.name);
        const hoursSet = await MerchantsService.merchantGetAllMerchantOpeningHours(process.env.CLOVER_MERCHANT_ID);
        //console.log("hoursSet", hoursSet.tuesday);
        const address = await MerchantsService.merchantGetMerchantAddress(process.env.CLOVER_MERCHANT_ID);
        //console.log("address", address);


        const items = (await InventoryService.inventoryGetItems(
                process.env.CLOVER_MERCHANT_ID
            ))
            .elements
            .filter((item: Item) => item.autoManage) as Item[];
        const item = await InventoryService.inventoryGetItem(process.env.CLOVER_MERCHANT_ID, items[0].id);
        //console.log("item", item);

        return items;
    });
    
}

export default function Home() {
  const items = useRouteData<typeof routeData>();

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