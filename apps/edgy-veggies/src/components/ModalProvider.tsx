import { createContext, useContext, JSX } from "solid-js";
import { createStore } from "solid-js/store";


type ModalState = {
    isOpen: boolean,
    content?: JSX.Element
}

export interface ModalContextModel {
    state: ModalState,
    actions: ModalActions
}

export interface ModalActions {
    open: (content?: JSX.Element) => void,
    close: () => void
}

type ModalProviderProps = {
    isOpen?: boolean,
    children?: JSX.Element
}

const ModalContext = createContext<ModalContextModel>();

export function ModalProvider(props: ModalProviderProps) {
    const [state, setState] = createStore<ModalState>({isOpen: props.isOpen || false});
    const value: ModalContextModel = {
        state:state,
        actions: {
            open(component: JSX.Element) {
                setState({isOpen: true, content: component});
            },
            close() { setState({isOpen: false}); }
        }
    }
    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    );
}

export function useModal(): ModalContextModel {
    return useContext(ModalContext);
}