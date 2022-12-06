import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { IStoreItem, ICartContextModel, ICartState } from "../types";
import { createCheckout } from "../Clover";


const CartContext = createContext<ICartContextModel>();

export function CartProvider(props) {
    const [state, setState] = createStore<ICartState>({items: []});
    const value: ICartContextModel = {
        state:state,
        actions: {
            addItems,
            removeItems,
            getItemCount,
            //getQuote: getQuote(state, setState),
            //createOrder: createCheckout
        }
    }

    function addItems(items: IStoreItem | IStoreItem[]) {
        if(Array.isArray(items)) {
            setState({items: [...state.items, ...items]});
        } else {
            setState({items: [...state.items, items]});
        }
    }

    function removeItems(items: IStoreItem | IStoreItem[]) {
        let toBeDeleted = {}
        if(Array.isArray(items)) {
            toBeDeleted = items.reduce((arr, v) => {
                if(!arr[v.id]) {
                    arr[v.id] = 0;
                }
                arr[v.id]++;
                return arr;
            }, {})
        } else {
            toBeDeleted[items.id] = 1;
        }

        const newItems = state.items.filter(item => {
            if(toBeDeleted[item.id]) {
                toBeDeleted[item.id]--;
                return false;
            }
            return true;
        });
        setState({items: [...newItems]});
        
    }

    function getItemCount(itemId) {
        return state.items.filter(item => item.id === itemId).length;
    }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCart = (): ICartContextModel => {
    return useContext(CartContext);
}