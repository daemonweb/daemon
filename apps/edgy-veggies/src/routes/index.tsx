import { createSignal } from "solid-js"
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import Fuse from 'fuse.js'
import { getItems, getMerchant } from "~/components/Ecommerce/Clover"
import Products from "~/components/Products";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import { Drawer } from "../components/Drawer";
import { Cart } from "~/components/Ecommerce/Cart/Cart";

export function routeData() {
  return {
    items: createServerData$(getItems),
    merchant: createServerData$(getMerchant)
  } 
} 

export default function Home() {
  const {items, merchant} = useRouteData<typeof routeData>();
  const [visibleItems, setVisibleItems] = createSignal(items());

  function onSearch(v) {
    if(!v) return;
    const fuse = new Fuse(items(), {
      keys: ['name']
    })
    const newItems = fuse.search(v).map(v => v.item)
    setVisibleItems(newItems);
  }

  return (
    <>
    <Navigation merchant={merchant()} onSearch={onSearch}/>
    <main class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Products items={visibleItems()} />
      <Drawer title={"Shopping Cart"}>
        <Cart />
      </Drawer>
    </main> 
    <Footer />
    </>
  );
}

