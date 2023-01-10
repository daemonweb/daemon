import { JSXElement } from "solid-js"

type LayoutProps = {
    content: JSXElement,
    navBar: JSXElement
}

export default function Layout(props: LayoutProps) {
    return (
        <div class="flex h-screen overflow-hidden">
            <div class="shrink-0 w-64 h-full">
                {props.navBar}
            </div>     
            <div class="grow w-full overflow-y-scroll overflow-x-hidden">
                {props.content}
            </div> 
        </div>
    )
}