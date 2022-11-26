import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getItems, getMerchant } from "~/services/Clover";
import Products from "~/components/Products";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export function routeData() {
  return {
    items: createServerData$(getItems),
    merchant: createServerData$(getMerchant)
  } 
}

export default function Home() {
  const {items, merchant} = useRouteData<typeof routeData>();

  return (
    <>        
    <Navigation logoSrc={merchant().logos[0].url}/>
    <main>
      <Products items={items()} />
    </main> 
    <Footer />
    </>
  );
}