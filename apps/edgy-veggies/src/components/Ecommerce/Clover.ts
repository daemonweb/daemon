import server$ from "solid-start/server";
import { 
    OpenAPI, 
    OrdersService,
    InventoryService,
    MerchantsService, 
    OrderType,
    OrderCart,
} from "@clover-platform"
import { IStoreItem } from "./types";
import { convertCloverPrice } from "./utils";


OpenAPI.BASE = process.env.CLOVER_BASE_URL;
OpenAPI.TOKEN = process.env.CLOVER_API_KEY;


export async function getMerchant() {
    const merchantRes = await MerchantsService.merchantGetMerchant(
        process.env.CLOVER_MERCHANT_ID, 
        encodeURI("openingHours,address,logos"));
    const orderTypeRes = await MerchantsService.merchantGetOrderTypes(process.env.CLOVER_MERCHANT_ID);
    return {
        name: merchantRes.name,
        address: merchantRes.address,
        logos: merchantRes.logos.elements,
        openingHours: merchantRes.opening_hours.elements,
        orderType: orderTypeRes.elements
    };
}

export async function getItems(): Promise<IStoreItem[]> {
    return (await InventoryService.inventoryGetItems(process.env.CLOVER_MERCHANT_ID))
      .elements
      .map(v => { 
        return {
            ...v,
            smallImgSrc: getSmallImageUrl(v.id),
            largeImgSrc: getLargeImageUrl(v.id),
            price: convertCloverPrice(v.price)
        }}) as IStoreItem[];  
}
  
export async function getOrderTypes(): Promise<OrderType[]> {
    return (await MerchantsService.merchantGetOrderTypes(process.env.CLOVER_MERCHANT_ID))
    .elements
    .filter((ot) => {
        if(ot.id === "GTN4S03FBNC3J" || ot.id ==="TNQA7NACBFPJG" )
        return true;
    }) as OrderType[];  
}


export enum ItemImageSize {
    SMALL = 120,
    LARGE = 576
}

const missingImages = [
    "MHA4G4ST2X8W8",
    "C55WZQZ0PA088",
    "69418PRAE5T3P",
    "M084119RRQZYT",
]

function getImageUrl(itemId: string, size: ItemImageSize): string {
    if (missingImages.includes(itemId)) {
        return getFakeImageUrl();
    }

    return `https://cloverstatic.com/menu-assets/items/${itemId}_${size}x${size}.jpeg`
}
 
export function getLargeImageUrl(itemId: string): string {
    return getImageUrl(itemId, ItemImageSize.LARGE)
}

export function getSmallImageUrl(itemId: string): string {
    return getImageUrl(itemId, ItemImageSize.SMALL)
}

export function getFakeImageUrl() {
    return "https://picsum.photos/120";
}

export function priceToString(price: number): number {
    if(!price) {
        return 0.00;
    }
    return price * 0.01;
}



// const cloverCreateOrder = server$(async (orderCart) => {
//     return await OrdersService.orderCreateAtomicOrder(process.env.CLOVER_MERCHANT_ID, { orderCart: orderCart });
// });

// export const createOrder = (state, setState) => async () => {
//     const items = state.lineItems;
//     const orderCart = cloverCreateOrder(items);
//     const res = await createCheckout();
//     console.log("order", res);
// }

// const createCheckout = server$(async () => {
//     const res = await fetch('https://sandbox.dev.clover.com/invoicingcheckoutservice/v1/checkouts', {
//         method: 'POST',
//         headers: {
//             'X-Clover-Merchant-Id': process.env.CLOVER_MERCHANT_ID,
//             'Authorization': 'Bearer ' + process.env.CLOVER_API_KEY,
//             'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify({
//             "customer" : {
//                 "email": "josh.elias@pm.me",    
//                 "firstName" : "Example",
//                 "lastName": "Customer",
//                 "phoneNumber": "223-555-0002"
//             },
//             "shoppingCart" : {
//                 "lineItems": [
//                     {
//                         "name": "Apple",
//                         "unitQty": 1,
//                         "price": 100
//                     },
//                     {
//                         "name": "Orange",
//                         "unitQty": 2,
//                         "price": 75
//                     }
//                 ]
//             }
//         })
//     });
//     return await res.json();
// });


// {
//     item: {id: item.id},
//     name: item.name,
//     alternateName: item.alternateName,
//     price: item.price,
//     itemCode: item.itemCode,
//     discounts: {elements:item.discounts},
//     taxRates: {elements:item.taxRates},

// }



//const merchant = await MerchantsService.merchantGetMerchant(process.env.CLOVER_MERCHANT_ID);
//console.log("merchant", merchant.name);
//const hoursSet = await MerchantsService.merchantGetAllMerchantOpeningHours(process.env.CLOVER_MERCHANT_ID);
//console.log("hoursSet", hoursSet.tuesday);
//const address = await MerchantsService.merchantGetMerchantAddress(process.env.CLOVER_MERCHANT_ID);
//console.log("address", address);
//const orderTypes = await getOrderTypes();
//console.log("orderTypes", orderTypes);