import { createEffect, createSignal, on, Suspense } from "solid-js";
import { HiOutlineSearch, HiOutlineShoppingCart } from "solid-icons/hi";
import { Merchant } from "@clover-platform";
import { useDrawer } from "./Drawer";
import { useCart } from "~/components/Ecommerce";


interface NavigationProps {
  merchant: Merchant;
  onSearch: (search: string) => void;
}

export default function Navigation(props: NavigationProps) {
    const drawer = useDrawer();
    const cart = useCart();
    const [search, setSearch] = createSignal("");

    createEffect(on(search, v => props.onSearch(v)))

    return (
        <header class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
          <div class="relative flex h-24 justify-between">
            <div class="relative z-10 flex px-2 lg:px-0">
              <div class="flex flex-shrink-0 items-center">
                <Suspense>
                  <img class="block h-16 w-auto" src={props.merchant?.logos[0].url} alt="Your Company"/>
                </Suspense>
              </div>
            </div>
            <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
              <div class="w-full md:max-w-lg sm:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <HiOutlineSearch style={{height:"1.6em", width:"1.6em"}} />
                  </div>
                  <input 
                    onInput={(e) => setSearch(e.currentTarget.value)} 
                    name="search" 
                    class="
                        block 
                        w-full 
                        h-12
                        rounded-md 
                        border border-transparent 
                        bg-gray-700 
                        py-2 pl-10 pr-3 
                        text-sm md:text-lg
                        placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 
                        focus:placeholder-gray-500 focus:outline-none focus:ring-white " 
                    placeholder="Search" type="search"/>
                </div>
              </div>
            </div>

            <div class="relative z-10 ml-4 flex items-center">
              <button  
                type="button" 
                class="
                  flex-shrink-0 rounded-full bg-gray-800 p-1 
                  text-gray-400 hover:text-white 
                  focus:outline-none">
                <span class="sr-only">View Cart</span>
                <div class="indicator">
                  <HiOutlineShoppingCart 
                    style={{height:"1.6em", width:"1.6em"}}
                    onClick={() => drawer.actions.open()} />
                  <span class="badge badge-sm badge-primary indicator-item">{cart.state.items.length}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      )
}