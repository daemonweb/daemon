const DAISY_DRAWER_ID = "drawer-id-1";

export function ToggleDrawer(props) {
    return (
        <label for={DAISY_DRAWER_ID} class="btn-ghost btn-circle drawer-button flex items-center justify-center">{props.children}</label>
    )
}

export function DrawerSide(props) {
    return (
        <div class={`drawer-side h-screen`}>
            <label for={DAISY_DRAWER_ID} class="drawer-overlay"></label> 
            <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                {props.children}
            </ul>
        </div>
    )
}

export function Drawer(props) {
    return (
        <div class="drawer drawer-end drawer-mobile ">
            <input id={DAISY_DRAWER_ID} type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {props.children}
            </div> 

            <DrawerSide>
                {props.sideContent}
            </DrawerSide>
  
        </div>
    )
}