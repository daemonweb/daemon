import { Icon } from "solid-heroicons";
import { home, briefcase, commandLine, folder, clipboardDocumentList } from "solid-heroicons/outline";
import { For } from "solid-js";
import NavOption from "./NavOption";

const options = [
    {
        title: "Home",
        path: "/",
        icon: <Icon path={home} class="w-6"/>,
    },
    {
        title: "Services",
        path: "/services",
        icon: <Icon path={briefcase} class="w-6"/>,
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <Icon path={folder} class="w-6"/>,
    },
    {
        title: "Skills",
        path: "/skills",
        icon: <Icon path={commandLine} class="w-6"/>,
    },
    {
        title: "Resume",
        path: "/resume",
        icon: <Icon path={clipboardDocumentList} class="w-6"/>,
    },
]


export default function NavBar() {
    return (      
        <div class="flex h-full flex-col bg-indigo-700">
            <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                    <img class="h-16 w-auto" src="/daemon_logo.svg" alt="Your Company"/>
                </div>
                <nav class="mt-8 flex-1 space-y-1 px-2" aria-label="Sidebar">
                    <For each={options}>
                        {(option) => 
                            <NavOption
                                title={option.title} 
                                path={option.path} 
                                icon={option.icon} 
                            />
                        }
                    </For>
                </nav>
            </div>
            <div class="flex flex-shrink-0 border-t border-indigo-800 p-4">
                <a href="/contact" class="group block w-full flex-shrink-0">
                <div class="flex items-center">
                    <div>
                        <img class="inline-block h-9 w-9 rounded-full" src="/joshy.jpg" alt=""/>
                    </div>
                    <div class="ml-3">
                    <p class="text-sm font-medium text-white">Josh Elias</p>
                    <p class="text-xs font-medium text-indigo-200 group-hover:text-white">Contact</p>
                    </div>
                </div>
                </a>
            </div>
            </div>

    );
}