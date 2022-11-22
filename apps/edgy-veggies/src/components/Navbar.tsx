import type { Component } from "solid-js";
import { Cart } from "./Cart";

const Navbar: Component = () => {
    return (
        <div class="navbar bg-primary">
            <div class="flex-1">
                <h1 class="text-2xl font-light">Edgy Veggie Co.</h1>
            </div>
            <div class="flex-none">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <Cart />  
            </div>
        </div>
    )
}

export default Navbar;