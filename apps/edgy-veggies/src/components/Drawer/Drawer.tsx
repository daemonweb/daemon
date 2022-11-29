import { Transition, TransitionChild } from "solid-headless";
import { HiOutlineX } from "solid-icons/hi";
import { JSX } from "solid-js";
import { useDrawer } from "./DrawerContext";


interface DrawerProps {
    children?: JSX.Element,
    title: string
}

export function Drawer(props: DrawerProps) {
    const drawer = useDrawer();

    return (
        <>
        <Transition show={drawer.state.isOpen}>
            <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                
                <TransitionChild
                        class="fixed inset-0 bg-black opacity-30"
                        enter="ease-in-out duration-500 sm:duration-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-30"
                        leave="ease-in-out duration-500 sm:duration-700"
                        leaveFrom="opacity-30"
                        leaveTo="opacity-0"
                />

                <div 
                    class="fixed inset-0 overflow-hidden"
                    onClick={() => drawer.actions.close()}
                >
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

          
                            <TransitionChild
                                    class="pointer-events-auto w-screen max-w-md"
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                       
                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div class="px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">{props.title}</h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button 
                                                type="button" 
                                                class="
                                                    rounded-md 
                                                    bg-white 
                                                    text-gray-400 hover:text-gray-500 focus:outline-none 
                                                    focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                onClick={() => drawer.actions.close()}>
                                                <span class="sr-only">Close panel</span>
                                                <HiOutlineX />
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                        {props.children}
                                    </div>
                                </div>
                           
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        </>
    )
}