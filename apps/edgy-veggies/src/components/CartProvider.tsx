import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Discount, LineItem, OrderType } from "@clover-platform";


type CartState = {
    lineItems: LineItem[],
    discounts: Discount[],
    orderType: OrderType
}

export interface CartContextModel {
    state: CartState,
    actions: CartActions
}

export interface CartActions {
    add(items: LineItem | LineItem[]): void,
    remove(item: LineItem | LineItem[]): void,
    getItemCount(lineItem): number,
}

const CartContext = createContext<CartContextModel>();


export function CartProvider(props) {
    const [state, setState] = createStore<CartState>({lineItems: [], discounts: [], orderType: {}});
    const value: CartContextModel = {
        state:state,
        actions: {
            add(items) {
                if(Array.isArray(items)) {
                    setState({lineItems: [...state.lineItems, ...items]});
                } else {
                    setState({lineItems: [...state.lineItems, items]});
                }
            },
            remove(items) {
                if(Array.isArray(items)) {
                    setState({lineItems: state.lineItems.filter(item => !items.includes(item))});
                } else {
                    setState({lineItems: state.lineItems.filter(item => item !== items)});
                }
            },
            getItemCount(itemName) {
                return state.lineItems.filter(item => item.name === itemName).length;
            }
        }
    }
    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCart = (): CartContextModel => {
    return useContext(CartContext);
}