import { JSX } from "solid-js";

export interface CardStatusProps {
    children?: JSX.Element
    count: number;
}

export function CartStatus(props) {
    return (
        <div class="indicator">
            {props.children}
            <span class="badge badge-sm badge-primary indicator-item">{cart.state.lineItems.length}</span>
        </div>
    );
};