import { JSXElement, onMount, createSignal } from "solid-js"

type NavOptionProps = {
    icon: JSXElement,
    title: string,
    path?: string,
}

function combineClasses(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavOption(props: NavOptionProps) {
    const [isCurrent, setIsCurrent] = createSignal(false);

    onMount(() => {
        if(window.location.pathname === props.path) {
            setIsCurrent(true);
        }
    })

    return (
        <> 
            <a 
                href={props.path || "#"} 
                class={combineClasses(
                    isCurrent()
                        ? 'bg-indigo-800 text-white' 
                        : 'text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
            >
                {props.icon}
                <span class="flex-1">{props.title}</span>
            </a>
        </>
                       
    )
}