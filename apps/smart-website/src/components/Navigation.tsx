import { createSignal } from "solid-js"


const [mobileShow, setMobileShow] = createSignal(false);


function MobileNav() {
    /*<!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->*/
    return (
        <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
            <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                    <div>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </div>
                    <div class="-mr-2">
                        <button 
                            type="button" 
                            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setMobileShow(false)}>
                            <span class="sr-only">Close main menu</span>
                            {/*<!-- Heroicon name: outline/x-mark -->*/}
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="space-y-1 px-2 pt-2 pb-3">
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Product</a>

                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Features</a>

                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Marketplace</a>

                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Company</a>
                </div>
                <a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</a>
            </div>
        </div>
    )
}

export default function Navigation() {
    return (
        <>
        <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
                <div class="flex flex-1 items-center">
                    <div class="flex w-full items-center justify-between md:w-auto">
                        <a href="#">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                        </a>
                        <div class="-mr-2 flex items-center md:hidden">
                        <button 
                            type="button" 
                            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                            aria-expanded="false"
                            onClick={() => setMobileShow(true)}>
                            <span class="sr-only">Open main menu</span>
                            {/*<!-- Heroicon name: outline/bars-3 -->*/}
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div class="hidden md:ml-10 md:block md:space-x-10">
                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>

                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>

                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
                    </div>
                    </div>
                    <div class="hidden text-right md:block">
                    <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                        <a href="#" class="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50">Log in</a>
                    </span>
                </div>
        </nav>
        {mobileShow() && <MobileNav />}
        </>
    )
}