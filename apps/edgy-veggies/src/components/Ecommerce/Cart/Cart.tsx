import { For } from "solid-js";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";
import { storeToCartItems } from "../utils";


export function Cart() {
    const cart = useCart();

    return (
        <ul role="list" class="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">
            <For each={storeToCartItems(cart.state.items)}>
                {(cartItem) => (
                    <CartItem 
                        name={cartItem.name} 
                        imgSrc={cartItem.imgSrc}
                        price={cartItem.total}
                        totalPrice={cartItem.total*cartItem.quantity}
                        count={cartItem.quantity} />
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

async function onCheckout(cart, setState) {
    if(cart.state.lineItems.length === 0)
        return;

    await cart.actions.getQuote();
};

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
