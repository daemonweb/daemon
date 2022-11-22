import { Component, createEffect,onMount, onCleanup, createContext, Context, useContext, JSX, on } from "solid-js";
import { createStore } from "solid-js/store";


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
    close: () => void
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

export const Modal: Component = () => {
    const modal = useModal();
    let modalBoxRef;


    function outsideClickHandler(e) {
        console.log("click target", e.target);
        console.log("modal box", modalBoxRef);

        let targetEl = e.target;
        do {
            if(targetEl == modalBoxRef) {
                // Inside Click
                return;
            }

            targetEl = targetEl.parentNode;
        } while(targetEl);

        // Outside Click
        modal.actions.close();
    }

    function onOpen() {
        document.body.style.overflow = "hidden";
        document.addEventListener("click", outsideClickHandler);
    }

    function onClose() {
        document.body.style.overflow = "unset";
        document.removeEventListener("click", outsideClickHandler);
    }

    function onOpenChange(isOpen, prevIsOpen) {
        console.log("onModalToggle", isOpen, prevIsOpen);
        if(isOpen && !prevIsOpen) {
            onOpen()
        } else if(!isOpen && prevIsOpen) {
            onClose();
        }
    }

    createEffect(
        on(() => modal.state.isOpen, 
        onOpenChange
    ));

    return (
        <>
            <input type="checkbox" class="modal-toggle" />
            <label class={`modal cursor-pointer ${(modal.state.isOpen) ? "modal-open" : ""}`}>
                <label ref={modalBoxRef} class="modal-box relative" for="">
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