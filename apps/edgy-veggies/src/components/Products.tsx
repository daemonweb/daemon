
import { For, Resource, Show, Suspense } from "solid-js";
import { Item } from "@clover-platform";
import Product from "~/components/Product";

export type InventoryProps = {
    items: Item[];
}

export default function Products(props) {
    return (
        <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Products</h2>
                <Show 
                    when={props.items}
                    fallback={<h1>No Products</h1>} >
                    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <For each={props.items}>
                            {(item) => (
                            <Product item={item} />
                            )}
                        </For>
                    </div>     
                </Show>
            </div>
        </div>
    )
}