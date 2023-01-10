import { JSXElement } from "solid-js";
import { A, useMatch } from "solid-start";
import { combineClasses } from "../utils";


type NavOptionProps = {
    icon: JSXElement,
    title: string,
    path: string,
}

export default function NavOption(props: NavOptionProps) {
    const match = useMatch(() => props.path);

    return (
        <A 
            href={props.path} 
            class={combineClasses(
                match()
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
            )}
        >
            {props.icon}
            <span class="flex-1 ml-1.5">{props.title}</span>
        </A>           
    )
}