import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Discount, LineItem, OrderCart, OrderType } from "@clover-platform";


type CartState = {
    lineItems: LineItem[],
    discounts?: Discount[],
    orderType?: OrderType
    note?: string;
    groupLineItems?: false;
}

export interface CartContextModel {
    state: CartState,
    actions: CartActions
}

export interface CartActions {
    add(items: LineItem | LineItem[]): void,
    remove(item: LineItem | LineItem[]): void,
    getItemCount(lineItem): number,
    getOrder()
}

const CartContext = createContext<CartContextModel>();

export function CartProvider(props) {
    const [state, setState] = createStore<CartState>({lineItems: []});
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
            },
            getOrder() {
                return {
                    note: state.note,
                    lineItems: state.lineItems.map(item => {
                        return {
                            id: item.id,
                            item: { id: item.id},
                            // name: item.name,
                            // alternateName: item.alternateName,
                            price: item.price,
                            // itemCode: item.itemCode,
                            // discounts: item.discounts,
                            // taxRates: item.taxRates,
                        }
                    }),
                    groupLineItems: false
                }
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

// {
//     item: {id: item.id},
//     name: item.name,
//     alternateName: item.alternateName,
//     price: item.price,
//     itemCode: item.itemCode,
//     discounts: {elements:item.discounts},
//     taxRates: {elements:item.taxRates},

// }