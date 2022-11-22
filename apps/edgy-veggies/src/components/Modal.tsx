import { Component, createSignal, createContext, Context, useContext, JSX } from "solid-js";
import { createStore } from "solid-js/store";

// TODO: Any way I can avoid initiallizing this here while still avoiding the "| undefined" type?
//const model:ModalContextModel = {state: {isOpen: false}, actions: {open:()=>{},close:()=>{},toggle:()=>{}}};
export const ModalContext = createContext<ModalContextModel>();

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
    close: () => void,
    toggle: () => void
}

type ModalProviderProps = {
    isOpen?: boolean,
    children?: JSX.Element
}

export const ModalProvider = (props: ModalProviderProps) => {
    const [state, setState] = createStore<ModalState>({isOpen: props.isOpen || false});
    const value: ModalContextModel = {
        state:state,
        actions: {
            open(component: JSX.Element) {
                console.log("open modal");
                setState({isOpen: true, content: component});
                document.body.style.overflow = "hidden";
            },
            close() {
                console.log("close modal");
                setState({isOpen: false});
                document.body.style.overflow = "unset";
            },
            toggle() {
                console.log("toggle modal");
                setState({
                    ...state,
                    isOpen: !state.isOpen
                });
                document.body.style.overflow = (state.isOpen) ? "unset" : "hidden";
            }
        }
    }
    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    );
}

export const Modal: Component = () => {

    const modal = useModal();

    return (
        <>
            <input type="checkbox" class="modal-toggle" />
            <label class={`modal cursor-pointer ${(modal.state.isOpen) ? "modal-open" : ""}`}>
                <label class="modal-box relative" for="">
                    <label onClick={() => modal.actions.close()} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </label>
            </label>
        </>
    );
};

export const useModal = ():ModalContextModel | undefined => {
    return useContext(ModalContext);
}

// export type TriggerModalProps = {
//     children?: any;
// }

// export const TriggerModal: Component<TriggerModalProps> = (props) => {

//     const [canScroll, setCanScroll] = createSignal(true);

//     const toggleScroll = () => { 
//         setCanScroll(!canScroll());
//         if(!canScroll()) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "unset";
//         }
//     }

//     return (
//         <label for="my-modal-4" class="btn" onClick={toggleScroll}>
//             {props.children}
//         </label>
//     );
// }