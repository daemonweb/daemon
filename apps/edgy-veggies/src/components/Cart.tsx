import { OrderCart, OrdersService, LineItem } from "@clover-platform";
import { For } from "solid-js";
import server$ from 'solid-start/server'
import CartItem from "./CartItem";
import { useCart } from "./CartProvider";

export function CartStatus() {
    const cart = useCart();

    return (
        <div class="indicator">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-sm indicator-item">{cart.state.lineItems.length}</span>
        </div>
    );
};

const onCheckout = server$(async (orderCart: any) => {
    const res = await OrdersService.orderCheckoutAtomicOrder(process.env.CLOVER_MERCHANT_ID, { orderCart });
    console.log("res", res);
    return res;
    //console.log("checkout", orderCart);
});

function groupLineItems(lineItems: LineItem[]) {
    return lineItems.reduce((acc, item) => {
        let groupItem = acc.find(e => e.item.id === item.id);
        if(!groupItem) {
            groupItem = {
                item: item,
                quantity: 0,
                total: 0
            }
            acc.push(groupItem);
        }

        // TODO: ok to modify object in array?
        groupItem.quantity++;
        groupItem.total += item.price;
        return acc;
    }, [] as any);
}

export function Cart() {
    const cart = useCart();
    return (
        <div class="flex flex-col justify-between h-full">
            <For each={groupLineItems(cart.state.lineItems)}>
                {(group) => (
                    <CartItem name={group.item.name} price={group.total} count={group.quantity} />
                )}
            </For>
            <span class="text-info">
                Subtotal: ${
                    cart.state.lineItems.reduce((acc, item) => { return acc+item.price; }, 0)   
                }
            </span>
            <button class="btn btn-primary" onClick={() => onCheckout(cart.actions.getOrder())}>Continue To Checkout</button>
        </div>              
    )
}


// Use /atomic_order/checkouts to build the order
// Call /atomic_order/orders to create the order
// Call v1/orders/{orderId}/pay of the Ecommerce API to automatically charge the total order amount and to include a tip

// export type OrderCart = {
//     note?: string;
//     lineItems?: Array<LineItem>;
//     orderType?: OrderType;
//     groupLineItems: false;
// };


// import type { Component } from "solid-js";

// const testCheckout = {
//     "shoppingCart": {
//         "lineItems": [
//             {
//               "name": "Apple",
//               "unitQty": 1,
//               "price": 100
//             },
//             {
//               "name": "Orange",
//               "unitQty": 2,
//               "price": 75
//             }
//           ]
//     },
//     "customer": {
//         "email": "email@example.com",
//         "firstName" : "Example",
//         "lastName": "Customer",
//         "phoneNumber": "223-555-0002"
//     }  
// }

// const apiKey = import.meta.env.PUBLIC_API_KEY;
// const mId = import.meta.env.PUBLIC_MERCHANT_ID;
// const checkoutUrl = 'https://sandbox.dev.clover.com/invoicingcheckoutservice/v1/checkouts';

// const startCheckoutSession = async () => {
//     try { 
//         const res = await fetch(checkoutUrl, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer '+apiKey,
//                 'X-Clover-Merchant-ID': mId
//             },
//             body: JSON.stringify(testCheckout)
//         })
//         const { href } = await res.json();
//         window.location.href = href;
//     } catch (error) {
//       window.alert(error)
//     }
// };

// const Checkout: Component = () => (
//     <button onClick={startCheckoutSession}>Pay</button>
// );


// export default Checkout;

// "items": [
//     {
//         "item": {
//             "id": "4N8WMXZNEEA0W"
//         },
//         "price": 100,
//         "name": "Hamburger",
//         "taxRates": [
//             {
//                 "id": "D348JSPPZ2D2A",
//                 "rate": 200000,
//                 "name": "Sales Tax"
//             }
//         ]
//     },
//     {
//         "item": {
//             "id": "FRVNW6S6XZBK0"
//         },
//         "price": 1000,
//         "name": "Coke"
//     }