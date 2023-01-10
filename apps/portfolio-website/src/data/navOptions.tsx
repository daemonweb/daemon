import { Icon } from "solid-heroicons";
import { home, briefcase, commandLine, folder, clipboardDocumentList } from "solid-heroicons/outline";

export default [
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
