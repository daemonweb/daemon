import { JSXElement } from "solid-js"

type LayoutProps = {
    content: JSXElement,
    navBar: JSXElement
}

export default function Layout(props: LayoutProps) {
    return (
        <div class="flex h-screen">
            <div class="flex w-80">
                {props.navBar}
            </div>     
            <div class="flex w-full">
                {props.content}
            </div> 
        </div>
    )
}