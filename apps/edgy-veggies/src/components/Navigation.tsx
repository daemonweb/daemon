//import { createTransition } from "@hope-ui/core";
import { createSignal } from "solid-js";
import { HiOutlineSearch, HiOutlineMenu, HiOutlineX, HiOutlineShoppingCart } from "solid-icons/hi";







export default function Navigation(props) {
    const [show] = createSignal(false);
    // const { style: showTransition } = createTransition(show, {
    //     transition:{
    //         in: { opacity: 0, scale: .95},
    //         out: { opacity: 1, scale: 1 },      
    //     },
    //     duration: 100,
    //     easing: "ease-out",
    // });

    // Entering: "transition ease-out duration-100"
    // From: "transform opacity-0 scale-95"
    // To: "transform opacity-100 scale-100"
    // Leaving: "transition ease-in duration-75"
    // From: "transform opacity-100 scale-100"
    // To: "transform opacity-0 scale-95"

    return (
        <header class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
          <div class="relative flex h-24 justify-between">
            <div class="relative z-10 flex px-2 lg:px-0">
              <div class="flex flex-shrink-0 items-center">
                <img class="block h-16 w-auto" src={props.logoSrc} alt="Your Company"/>
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
                    id="search" 
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
            <div class="relative z-10 flex items-center lg:hidden">
              {/* --- Mobile menu button --- */ }
              <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                {show() ? <HiOutlineMenu /> : <HiOutlineX />}
              </button>
            </div>
            <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <button type="button" class="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">View notifications</span>
                <HiOutlineShoppingCart style={{height:"1.6em", width:"1.6em"}} />
              </button>
            </div>
          </div>
        </div>
      

      </header>
      )
}