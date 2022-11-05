import type { Component } from "solid-js";

const testCheckout = {
    "shoppingCart": {
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
    },
    "customer": {
        "email": "email@example.com",
        "firstName" : "Example",
        "lastName": "Customer",
        "phoneNumber": "223-555-0002"
    }  
}

const apiKey = import.meta.env.PUBLIC_API_KEY;
const mId = import.meta.env.PUBLIC_MERCHANT_ID;
const checkoutUrl = 'https://sandbox.dev.clover.com/invoicingcheckoutservice/v1/checkouts';

const startCheckoutSession = async () => {
    try { 
        const res = await fetch(checkoutUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+apiKey,
                'X-Clover-Merchant-ID': mId
            },
            body: JSON.stringify(testCheckout)
        })
        const { href } = await res.json();
        window.location.href = href;
    } catch (error) {
      window.alert(error)
    }
};

const Checkout: Component = () => (
    <button onClick={startCheckoutSession}>Pay</button>
);


export default Checkout;