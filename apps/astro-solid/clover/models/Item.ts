/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';
import type { ItemStock } from './ItemStock';
import type { ModifierGroup } from './ModifierGroup';
import type { Option } from './Option';
import type { Reference } from './Reference';
import type { Tag } from './Tag';
import type { TaxRate } from './TaxRate';

export type Item = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * True if this item is hidden from Clover Register App
     */
    hidden?: boolean;
    /**
     * True if this item is available for sale across all channels
     */
    available?: boolean;
    /**
     * False manually manage item availability, True item availability depends on stock count
     */
    autoManage?: boolean;
    /**
     * Reference to an item group
     */
    itemGroup?: Reference;
    /**
     * List of options pertaining to this item's attribute variation
     */
    options?: Array<Option>;
    /**
     * Name of the item
     */
    name: string;
    /**
     * Alternate name of the item
     */
    alternateName?: string;
    /**
     * Product code, e.g. UPC or EAN
     */
    code?: string;
    /**
     * SKU of the item
     */
    sku?: string;
    /**
     * Price of the item, typically in cents; use priceType and merchant currency to determine actual item price. For non-VAT merchants, this field is exclusive of tax. For VAT merchants, this field is inclusive of tax.
     */
    price: number;
    priceType?: Item.priceType;
    /**
     * Flag to indicate whether or not to use default tax rates
     */
    defaultTaxRates?: boolean;
    /**
     * Unit name, e.g. oz, lb
     */
    unitName?: string;
    /**
     * Cost of the item to merchant, as opposed to customer price
     */
    cost?: number;
    /**
     * True if this item should be counted as revenue. For example, gift cards and donations would not be counted as revenue.
     */
    isRevenue?: boolean;
    /**
     * Deprecated, use itemStock instead.
     */
    stockCount?: number;
    taxRates?: Array<TaxRate>;
    modifierGroups?: Array<ModifierGroup>;
    /**
     * Categories associated with this item
     */
    categories?: Array<Category>;
    /**
     * Tags associated with this item
     */
    tags?: Array<Tag>;
    /**
     * Reference to canonical items
     */
    canonical?: Reference;
    /**
     * Item stock attribute that can be expanded to show stock quantity
     */
    itemStock?: ItemStock;
    modifiedTime?: number;
    /**
     * Timestamp when item was last deleted
     */
    deletedTime?: number;
    /**
     * The price without value-added tax (VAT). For non-VAT merchants, this field is ignored. For VAT merchants, this field is the base price of an item.
     */
    priceWithoutVat?: number;
    /**
     * Hex code representation of the color assigned to item in the form of #fff, #ffffff, or #ffffffff
     */
    colorCode?: string;
};

export namespace Item {

    export enum priceType {
        FIXED = 'FIXED',
        VARIABLE = 'VARIABLE',
        PER_UNIT = 'PER_UNIT',
    }


}

