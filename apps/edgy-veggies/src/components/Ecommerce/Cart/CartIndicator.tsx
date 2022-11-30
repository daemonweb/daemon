import { JSX } from "solid-js";

export interface CardStatusProps {
    children?: JSX.Element
    count: number;
}

export function CartStatus(props) {
    return (
        <div class="indicator">
            {props.children}
            {props.count && <span class="badge badge-sm badge-primary indicator-item">{props.count}</span>}
        </div>
    );
};