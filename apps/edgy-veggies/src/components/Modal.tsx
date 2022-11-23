import { createEffect, on } from "solid-js";
import { useModal } from "./ModalProvider";

export function Modal() {
    const modal = useModal();
    let modalBoxRef;

    function outsideClickHandler(e) {
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
