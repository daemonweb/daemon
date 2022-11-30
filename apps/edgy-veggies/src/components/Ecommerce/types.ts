export interface IStoreItem {
    id: string,
    name: string,
    price: number,
    smallImgSrc: string,
    largeImgSrc: string,
}

export interface IDiscount {
    id?: string;
    discount?: string;
    approver?: string;
    name: string;
    amount?: number;
    percentage?: number;
};

export interface IOrderType {
    id?: string;
    labelKey?: string;
    label?: string;
    taxable?: boolean;
    isDefault?: boolean;
    filterCategories?: boolean;
    isHidden?: boolean;
    fee?: number;
    minOrderAmount?: number;
    maxOrderAmount?: number;
    maxRadius?: number;
    avgOrderTime?: number;
    //hoursAvailable?: OrderType.hoursAvailable;
    //customerIdMethod?: OrderType.customerIdMethod;
    isDeleted?: boolean;
    systemOrderTypeId?: string;
    //hours?: HoursSet;
    categories?: Array<string>;
};

export interface ICartItem {
    id: string;
    name: string,
    imgSrc: string,
    quantity: number,
    price: number,
    total: number,
}

export interface ICartState {
    items: IStoreItem[],
    discounts?: IDiscount[],
    orderType?: IOrderType
    note?: string;
    quote?: any;
    groupLineItems?: false;
}

export interface ICartContextModel {
    state: ICartState,
    actions: ICartActions
}

export interface ICartActions {
    addItems(items: IStoreItem | IStoreItem[]): void,
    removeItems(item: IStoreItem | IStoreItem[]): void,
    getItemCount(lineItem): number,
    //getQuote(),
    //createOrder()
}

export interface ICardItemProps {
    name: string,
    price: number,
    totalPrice: number,
    count: number,
    imgSrc: string
}