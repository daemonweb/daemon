
import { 
    OpenAPI, 
    InventoryService,
    MerchantsService, 
    Item,
    OrderType
} from "@clover-platform"


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

export async function getItems(): Promise<Item[]> {
    return (await InventoryService.inventoryGetItems(process.env.CLOVER_MERCHANT_ID))
      .elements
      .map(v => { 
        return {
            smallImgSrc: getSmallImageUrl(v.id),
            largeImgSrc: getLargeImageUrl(v.id),
            ...v
        }}) as Item[];  
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

export function priceToString(price: number): string {
    if(price < 100) {
        return "$0.00";
    }
    const rawString = price.toString();
    const i = rawString.length-2
    return `${rawString.substring(0, i)}.${rawString.substring(i, rawString.length)}`
}



//const merchant = await MerchantsService.merchantGetMerchant(process.env.CLOVER_MERCHANT_ID);
//console.log("merchant", merchant.name);
//const hoursSet = await MerchantsService.merchantGetAllMerchantOpeningHours(process.env.CLOVER_MERCHANT_ID);
//console.log("hoursSet", hoursSet.tuesday);
//const address = await MerchantsService.merchantGetMerchantAddress(process.env.CLOVER_MERCHANT_ID);
//console.log("address", address);
//const orderTypes = await getOrderTypes();
//console.log("orderTypes", orderTypes);