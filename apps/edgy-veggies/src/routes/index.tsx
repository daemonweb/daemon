import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getItems } from "~/services/Clover";
import Products from "~/components/Products";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";


export function routeData() {
    return createServerData$(async () => {

        const items = await getItems();
        //console.log("items", items);
        return items;
    });
    
}

export default function Home() {
  const items = useRouteData<typeof routeData>();

  return (
    <>        
    <Navbar />
    <main>
      <Products items={items()}/>
    </main> 
    <Footer />
    </>
  );
}