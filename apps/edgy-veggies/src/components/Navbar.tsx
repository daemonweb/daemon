import { CartStatus } from "./Cart";
import { ToggleDrawer } from "./Drawer";

export default function Navbar() {
    return (
        <div class="navbar bg-primary">
            <div class="flex-1">
                <h1 class="text-2xl font-light">[Logo]</h1>
            </div>
            <div class="flex-none">
                <ToggleDrawer>
                    <CartStatus />  
                </ToggleDrawer>
            </div>
        </div>
    )
}