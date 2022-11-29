import type { LineItem } from "@clover-platform";
import { createSignal, For } from "solid-js";
import CartItem from "./CartItem";
import { useCart } from "./CartProvider";
import Customer from "./Customer";

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

async function onCheckout(cart, setState) {
    if(cart.state.lineItems.length === 0)
        return;

    await cart.actions.getQuote();
    setState(CartStage.Review);

};


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

enum CartStage {
    Create = "create",
    Review = "review"
}

export function Cart() {
    const cart = useCart();
    //const [state, setState] = createSignal<CartStage>(CartStage.Create);

    return (
        <ul role="list" class="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">
            <For each={groupLineItems(cart.state.lineItems)}>
                {(group) => (
                    <CartItem 
                        name={group.item.name} 
                        imgSrc={group.item.smallImgSrc}
                        price={group.total} 
                        count={group.quantity} />
                )}
            </For>
        </ul>              
    )             
}

async function onBuy(cart) {
    const res = await cart.actions.createOrder();
    if(res.href) {
        window.location.replace(res.href);
    }
}

{/* <span class="text-info">
Subtotal: ${
    cart.state.lineItems.reduce((acc, item) => { return acc+item.price; }, 0)   
}
</span>
<button class="btn btn-primary" onClick={() => onCheckout(cart, setState)}>Continue To Checkout</button> */}

        // {state() === CartStage.Review && (
        //     <div class="flex flex-col justify-between">
        //         <For each={groupLineItems(cart.state.quote.orderCart.lineItems.elements)}>
        //             {(group) => (
        //                 <CartItem name={group.item.name} price={group.total} count={group.quantity} />
        //             )}
        //         </For>
        //     <span>{cart.state.quote.total}</span>
        //     <span>{cart.state.quote.totalTaxAmount}</span>
        //     <span>{cart.state.quote.total}</span>
        //     <Customer />
        //     <button class="btn btn-primary" onClick={() => onBuy(cart)}>Buy</button>
        //     </div>
        // )}

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


// curl --location --request POST 'https://sandbox.dev.clover.com/invoicingcheckoutservice/v1/checkouts' \
// --header 'X-Clover-Merchant-Id: X6A22CBB325M1' \
// --header 'Authorization: Bearer 7d0d2a09-d485-0c5b-7b4d-1c8eb227446e' \
// --header 'Content-Type: application/json' \  
// --data-raw '{
//   "customer" : {
//     "email": "josh.elias@pm.me",    
//     "firstName" : "Example",
//     "lastName": "Customer",
//     "phoneNumber": "223-555-0002"
//   },
//   "shoppingCart" : {
//     "lineItems": [
//       {
//         "name": "Apple",
//         "unitQty": 1,
//         "price": 100
//       },
//       {
//         "name": "Orange",
//         "unitQty": 2,
//         "price": 75
//       }
//     ]
//   }
//  }'