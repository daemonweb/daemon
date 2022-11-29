import { createContext, useContext, JSX } from "solid-js";
import { createStore } from "solid-js/store";


export type DrawerState = {
    isOpen: boolean,
    content?: JSX.Element
}

export interface DrawerContextModel {
    state: DrawerState,
    actions: DrawerActions
}

export interface DrawerActions {
    open: (content?: JSX.Element) => void,
    close: () => void
}

export type DrawerProviderProps = {
    children?: JSX.Element
}

const DrawerContext = createContext<DrawerContextModel>();

export function DrawerProvider(props: DrawerProviderProps) {
    const [state, setState] = createStore<DrawerState>({isOpen: false});
    const value: DrawerContextModel = {
        state:state,
        actions: {
            open(component: JSX.Element) {
                setState({isOpen: true, content: component});
            },
            close() { setState({isOpen: false}); }
        }
    }
    return (
        <DrawerContext.Provider value={value}>
            {props.children}
        </DrawerContext.Provider>
    );
}

export function useDrawer(): DrawerContextModel {
    return useContext(DrawerContext);
}