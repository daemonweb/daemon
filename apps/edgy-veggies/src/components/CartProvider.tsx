import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import server$ from "solid-start/server";
import { Discount, LineItem, OrderCart, OrdersService, OrderType } from "@clover-platform";


type CartState = {
    lineItems: LineItem[],
    discounts?: Discount[],
    orderType?: OrderType
    note?: string;
    quote?: any;
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
    getQuote(),
    createOrder()
}

const CartContext = createContext<CartContextModel>();

export function CartProvider(props) {
    const [state, setState] = createStore<CartState>({lineItems: []});
    const value: CartContextModel = {
        state:state,
        actions: {
            add(items) {
                console.log("add items", items);
                if(Array.isArray(items)) {
                    setState({lineItems: [...state.lineItems, ...items]});
                } else {
                    setState({lineItems: [...state.lineItems, items]});
                }
            },
            remove(items) {
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

                const newItems = state.lineItems.filter(item => {
                    if(toBeDeleted[item.id]) {
                        toBeDeleted[item.id]--;
                        return false;
                    }
                    return true;
                });
                setState({lineItems: [...newItems]});
                
            },
            getItemCount(itemId) {
                const count = state.lineItems.filter(item => item.id === itemId).length;
                return count;
            },
            getQuote: getQuote(state, setState),
            createOrder: createCheckout
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



const checkoutOrder = server$(async (orderCart: any) => {
    return await OrdersService.orderCheckoutAtomicOrder(process.env.CLOVER_MERCHANT_ID, { orderCart });
});

function itemsToOrderCart(lineItems: LineItem[]): OrderCart {
    return {
        note: "",
        lineItems: lineItems.map(item => {
            return {
                id: item.id,
                item: { id: item.id},
                name: item.name,
                // alternateName: item.alternateName,
                price: item.price,
                itemCode: item.itemCode,
                discounts: item.discounts,
                taxRates: item.taxRates,
            }
        }),
        groupLineItems: false
    }
}


const getQuote = (state, setState) => async () => {
    const items = state.lineItems;
    const orderCart = itemsToOrderCart(items);
    const res = await checkoutOrder(orderCart);
    console.log("res", res);
    setState({quote: res});
    return res;
}

// const cloverCreateOrder = async (orderCart) => {
//     return await OrdersService.orderCreateAtomicOrder(process.env.CLOVER_MERCHANT_ID, { orderCart: orderCart });
// }

// const createOrder = (state, setState) => async () => {
//     const items = state.lineItems;
//     const orderCart = cloverCreateOrder(items);
//     const res = await checkoutOrder(orderCart);
//     console.log("order", res);
// }

const createCheckout = (server$(async () => {
    const res = await fetch('https://sandbox.dev.clover.com/invoicingcheckoutservice/v1/checkouts', {
        method: 'POST',
        headers: {
            'X-Clover-Merchant-Id': process.env.CLOVER_MERCHANT_ID,
            'Authorization': 'Bearer ' + process.env.CLOVER_API_KEY,
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            "customer" : {
                "email": "josh.elias@pm.me",    
                "firstName" : "Example",
                "lastName": "Customer",
                "phoneNumber": "223-555-0002"
            },
            "shoppingCart" : {
                "lineItems": [
                    {
                        "name": "Apple",
                        "unitQty": 1,
                        "price": 100
                    },
                    {
                        "name": "Orange",
                        "unitQty": 2,
                        "price": 75
                    }
                ]
            }
        })
    });
    const data = await res.json();
    return data;
}));


// {
//     item: {id: item.id},
//     name: item.name,
//     alternateName: item.alternateName,
//     price: item.price,
//     itemCode: item.itemCode,
//     discounts: {elements:item.discounts},
//     taxRates: {elements:item.taxRates},

// }