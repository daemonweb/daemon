import { IStoreItem, ICartItem } from "./types";

export function  convertCloverPrice(price: number): string {
    if(price < 100) {
        return "0.00";
    }

    return price.toFixed(2);
}

export function storeToCartItems(items: IStoreItem[]): ICartItem[] {
    return items.reduce((acc, item) => {
        let cartItem = acc.find(v => v.id === item.id);
        if(!cartItem) {
            cartItem = {
                id: item.id,
                name: item.name,
                price: item.price,
                imgSrc: item.smallImgSrc,
                quantity: 0,
                total: 0
            }
            acc.push(cartItem);
        }

        // TODO: ok to modify object in array?
        cartItem.quantity++;
        cartItem.total += item.price;
        return acc;
    }, [] as ICartItem[]);
}