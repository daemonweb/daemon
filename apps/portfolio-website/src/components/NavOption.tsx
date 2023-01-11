import { JSXElement } from "solid-js";
import { A } from "solid-start";


type NavOptionProps = {
    icon: JSXElement,
    title: string,
    path: string,
}

export default function NavOption(props: NavOptionProps) {
    return (
        <A 
            href={props.path} 
            class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            activeClass="bg-indigo-800 text-white"
            inactiveClass="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75"
        >
            {props.icon}
            <span class="flex-1 ml-1.5">{props.title}</span>
        </A>           
    )
}