/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attribute } from '../models/Attribute';
import type { Category } from '../models/Category';
import type { CategoryItem } from '../models/CategoryItem';
import type { CategorySortOrderArray } from '../models/CategorySortOrderArray';
import type { Discount } from '../models/Discount';
import type { IdArray } from '../models/IdArray';
import type { InventoryItems } from '../models/InventoryItems';
import type { Item } from '../models/Item';
import type { ItemGroup } from '../models/ItemGroup';
import type { ItemModifierGroup } from '../models/ItemModifierGroup';
import type { ItemStock } from '../models/ItemStock';
import type { Modifier } from '../models/Modifier';
import type { ModifierGroup } from '../models/ModifierGroup';
import type { ModifierGroupArray } from '../models/ModifierGroupArray';
import type { Option } from '../models/Option';
import type { OptionItem } from '../models/OptionItem';
import type { Reference } from '../models/Reference';
import type { Tag } from '../models/Tag';
import type { TagItem } from '../models/TagItem';
import type { TaxRate } from '../models/TaxRate';
import type { TaxRateItem } from '../models/TaxRateItem';
import type { TaxRule } from '../models/TaxRule';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InventoryService {

    /**
     * Get all inventory items
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, hidden, itemCode, available, option.id, modifierGroup.id, autoManage, price, id, sku, defaultTaxRates, tags.id, alternateName, isRevenue, tags.name, deleted, item.id, name, itemStock.quantity, itemGroup.id]
     * @param expand Expandable fields: [tags, categories, taxRates, modifierGroups, itemStock, options]
     * @returns any
     * @throws ApiError
     */
    public static inventoryGetItems(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/items',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create an inventory item
     * @param mId Merchant Id
     * @param expand Expandable fields: [tags, categories, taxRates, modifierGroups, itemStock, options]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryCreateItem(
        mId: string,
        expand?: string,
        requestBody?: Item,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/items',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete multiple inventory items
     * Deletes multiple inventory items in a single request. Add a query string with the parameter `itemIds` and a comma-separated list of one or more `itemId` values.
     *
     * Use this example to create a request to delete three items:
     * {merchantId}/items?itemIds={itemId},{itemId},{itemId}
     * @param mId Merchant Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryBulkDeleteItems(
        mId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/items',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get all inventory without a revenue class
     * Get all inventory items which are not associated to any revenue class (that is, `showInReporting`is false or items which have no tags)
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, hidden, itemCode, available, option.id, modifierGroup.id, autoManage, price, id, sku, defaultTaxRates, tags.id, alternateName, isRevenue, tags.name, deleted, item.id, name, itemStock.quantity, itemGroup.id]
     * @param expand Expandable fields: [tags, categories, taxRates, modifierGroups, itemStock, options]
     * @returns any
     * @throws ApiError
     */
    public static inventoryGetItemsNoRevenueClass(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/items_no_revenue_class',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get a single inventory item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @param expand Expandable fields: [tags, categories, taxRates, modifierGroups, itemStock, options]
     * @returns any
     * @throws ApiError
     */
    public static inventoryGetItem(
        mId: string,
        itemId: string,
        expand?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/items/{itemId}',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update an existing inventory item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @param expand Expandable fields: [tags, categories, taxRates, modifierGroups, itemStock, options]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryUpdateItem(
        mId: string,
        itemId: string,
        expand?: string,
        requestBody?: Item,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/items/{itemId}',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an inventory item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryDeleteItem(
        mId: string,
        itemId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/items/{itemId}',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
        });
    }

    /**
     * Update existing inventory items
     * Updates only the changes present in the payload without replacing the existing inventory items. Use the POST HTTP method to create inventory items.
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryBulkPatchInventoryItems(
        mId: string,
        requestBody?: InventoryItems,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v3/merchants/{mId}/bulk_items',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create multiple inventory items
     * Creates multiple inventory items in a single request. Use the PATCH HTTP method to update existing inventory items.
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryBulkCreateInventoryItems(
        mId: string,
        requestBody?: InventoryItems,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/bulk_items',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get the stock of all inventory items
     * @param mId Merchant Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryGetItemStocks(
        mId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/item_stocks',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get the stock of an inventory item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryGetItemStock(
        mId: string,
        itemId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/item_stocks/{itemId}',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
        });
    }

    /**
     * Update the stock of an inventory item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryUpdateItemStock(
        mId: string,
        itemId: string,
        requestBody?: ItemStock,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/item_stocks/{itemId}',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete the stock of an inventory item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryDeleteItemStock(
        mId: string,
        itemId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/item_stocks/{itemId}',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
        });
    }

    /**
     * Get all item groups
     * Item groups allow merchants to create and manage large groups of related items. This is described to merchants as an 'Item with variants'.
     *
     * For example, a merchant may sell a T-shirt that is available in various sizes and colors. Each of the T-shirt variations is an item and belongs to the T-shirt item group. Once an item group is created, it appears in Register as a single button, and tapping it brings up a choice of which variation is to be sold.
     *
     * Before adding items to an item group, you first need to create the item group. Next, you create attributes (such as 'size' and 'color') and options for each attribute (such as 'small' and 'blue'). Then, you create the individual items and include the item group id to associate the items with the group. Finally, associate the options with an item.
     *
     * An item can only belong to an item group if the item group id is specified when the item is created.
     *
     * The name of an item which is a member of an item group is automatically generated by the Clover server as a combination of the item group name and the name of all the options associated with that item. It cannot be changed. If the item group name is changed, or if an option name is changed, then the item names will be automatically regenerated.
     *
     * An item can only be a member of a single item group and once it is part of an item group it can never be removed or moved to another item group; it can only be deleted.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, name, id, deletedTime]
     * @param expand Expandable fields: [items, attributes]
     * @returns ItemGroup
     * @throws ApiError
     */
    public static inventoryGetItemGroups(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<ItemGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/item_groups',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create an item group
     * @param mId Merchant Id
     * @param expand Expandable fields: [items, attributes]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryCreateItemGroup(
        mId: string,
        expand?: string,
        requestBody?: ItemGroup,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/item_groups',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single item group
     * @param mId Merchant Id
     * @param itemGroupId Item Group Id
     * @param expand Expandable fields: [items, attributes]
     * @returns ItemGroup
     * @throws ApiError
     */
    public static inventoryGetItemGroup(
        mId: string,
        itemGroupId: string,
        expand?: string,
    ): CancelablePromise<ItemGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/item_groups/{itemGroupId}',
            path: {
                'mId': mId,
                'itemGroupId': itemGroupId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update an item group
     * @param mId Merchant Id
     * @param itemGroupId Item Group Id
     * @param expand Expandable fields: [items, attributes]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryUpdateItemGroup(
        mId: string,
        itemGroupId: string,
        expand?: string,
        requestBody?: ItemGroup,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/item_groups/{itemGroupId}',
            path: {
                'mId': mId,
                'itemGroupId': itemGroupId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an item group
     * @param mId Merchant Id
     * @param itemGroupId Item Group Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryDeleteItemGroup(
        mId: string,
        itemGroupId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/item_groups/{itemGroupId}',
            path: {
                'mId': mId,
                'itemGroupId': itemGroupId,
            },
        });
    }

    /**
     * Get all tags
     * Similarly to how they are described by wikipedia, tags are an informal way of establishing a relationship. Tags currently may be associated with items and printers. When an tag is associated with both an item and a printer that establishes a special relationship that results in those items being printed out on the associated printer when printing an order. Other than that special case there is no effect when an item is associated with a tag. Developers may use tags to establish a relationship meaningful for their needs.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, deleted, name, showInReporting, id]
     * @param expand Expandable fields: [items, printers]
     * @returns Tag
     * @throws ApiError
     */
    public static tagGetTags(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tags',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create a tag
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static tagCreateTag(
        mId: string,
        requestBody?: Tag,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tags',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete tags
     * Deletes multiple tags in a single request. Add a query string with the parameter `tagIds` and a comma-separated list of one or more `tagIds` values.
     *
     * Use this example to create a request to delete three tags:
     * {merchantId}/tags?tagIds={tagId1},{tagId2},{tagId3}
     * @param mId Merchant Id
     * @returns any
     * @throws ApiError
     */
    public static tagBulkDeleteTags(
        mId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/tags',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get a single tag
     * @param mId Merchant Id
     * @param tagId Tag Id
     * @param expand Expandable fields: [items, printers]
     * @returns Tag
     * @throws ApiError
     */
    public static tagGetTag(
        mId: string,
        tagId: string,
        expand?: string,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tags/{tagId}',
            path: {
                'mId': mId,
                'tagId': tagId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a single tag
     * @param mId Merchant Id
     * @param tagId Tag Id
     * @param expand Expandable fields: [items, printers]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static tagUpdateTag(
        mId: string,
        tagId: string,
        expand?: string,
        requestBody?: Tag,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tags/{tagId}',
            path: {
                'mId': mId,
                'tagId': tagId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a tag
     * @param mId Merchant Id
     * @param tagId Tag Id
     * @returns any
     * @throws ApiError
     */
    public static tagDeleteTag(
        mId: string,
        tagId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/tags/{tagId}',
            path: {
                'mId': mId,
                'tagId': tagId,
            },
        });
    }

    /**
     * Get tags for a single item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @param filter Filter fields: [modifiedTime, deleted, name, showInReporting, id]
     * @param expand Expandable fields: [items, printers]
     * @returns Tag
     * @throws ApiError
     */
    public static tagGetItemTags(
        mId: string,
        itemId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/items/{itemId}/tags',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all items for a single tag
     * @param mId Merchant Id
     * @param tagId Tag Id
     * @param filter Filter fields: [modifiedTime, hidden, itemCode, available, option.id, alternateName, isRevenue, modifierGroup.id, autoManage, deleted, item.id, price, name, itemStock.quantity, id, sku, defaultTaxRates, itemGroup.id]
     * @param expand Expandable fields: [items, printers]
     * @returns Item
     * @throws ApiError
     */
    public static tagGetTaggedItems(
        mId: string,
        tagId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tags/{tagId}/items',
            path: {
                'mId': mId,
                'tagId': tagId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get a list of all tag to item mappings
     * @param mId Merchant Id
     * @param filter Filter fields: []
     * @returns TagItem
     * @throws ApiError
     */
    public static tagGetTagItems(
        mId: string,
        filter?: string,
    ): CancelablePromise<TagItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tag_items',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Create or delete associations between tags and items
     * @param mId Merchant Id
     * @param _delete Setting this to `true` removes associations specified in the request body
     * @returns TagItem
     * @throws ApiError
     */
    public static tagCreateOrDeleteTagItems(
        mId: string,
        _delete?: boolean,
    ): CancelablePromise<TagItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tag_items',
            path: {
                'mId': mId,
            },
            query: {
                'delete': _delete,
            },
        });
    }

    /**
     * Get all tax rates
     * @param mId Merchant Id
     * @param filter Filter fields: [isDefault, rate, items.id, name, id, taxAmount, taxType]
     * @param expand Expandable fields: [items]
     * @returns TaxRate
     * @throws ApiError
     */
    public static taxrateGetTaxRates(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<TaxRate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tax_rates',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create a tax rate for a merchant
     * @param mId Merchant Id
     * @param expand Expandable fields: [items]
     * @param requestBody
     * @returns TaxRate
     * @throws ApiError
     */
    public static taxrateCreateTaxRate(
        mId: string,
        expand?: string,
        requestBody?: TaxRate,
    ): CancelablePromise<TaxRate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tax_rates',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single tax rate
     * @param mId Merchant Id
     * @param taxId Tax Id
     * @param expand Expandable fields: [items]
     * @returns TaxRate
     * @throws ApiError
     */
    public static taxrateGetTaxRate(
        mId: string,
        taxId: string,
        expand?: string,
    ): CancelablePromise<TaxRate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tax_rates/{taxId}',
            path: {
                'mId': mId,
                'taxId': taxId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a single tax rate
     * @param mId Merchant Id
     * @param taxId Tax Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static taxrateUpdateTaxRate(
        mId: string,
        taxId: string,
        requestBody?: TaxRate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tax_rates/{taxId}',
            path: {
                'mId': mId,
                'taxId': taxId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a single tax rate
     * @param mId Merchant Id
     * @param taxId Tax Id
     * @returns any
     * @throws ApiError
     */
    public static taxrateDeleteTaxRate(
        mId: string,
        taxId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/tax_rates/{taxId}',
            path: {
                'mId': mId,
                'taxId': taxId,
            },
        });
    }

    /**
     * Get all categories
     * Categories alter the user experience of the Register app. Items will appear in the Register app within the categories they are members of. Items may be associated with no, one or multiple categories. Items are displayed in Register in the order in which they are added to a category. Categories are displayed in Register using the sort order value for each category.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, deleted, sortOrder, name, colorCode, id]
     * @param expand Expandable field: [items]
     * @returns Category
     * @throws ApiError
     */
    public static categoryGetCategories(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/categories',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create an item category
     * @param mId Merchant Id
     * @param expand Expandable field: [items]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static categoryCreateCategory(
        mId: string,
        expand?: string,
        requestBody?: Category,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/categories',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete categories
     * Deletes multiple categories in a single request. Add a query string with the parameter `categoryIds` and a comma-separated list of one or more `categoryIds` values.
     *
     * Use this example to create a request to delete three categories:
     * {merchantId}/categories?categoryIds={categoryId},{categoryId},{categoryId}
     * @param mId Merchant Id
     * @returns any
     * @throws ApiError
     */
    public static categoryBulkDeleteCategories(
        mId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/categories',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get a category
     * @param mId Merchant Id
     * @param catId Category Id
     * @param expand Expandable field: [items]
     * @returns Category
     * @throws ApiError
     */
    public static categoryGetCategory(
        mId: string,
        catId: string,
        expand?: string,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/categories/{catId}',
            path: {
                'mId': mId,
                'catId': catId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a category
     * @param mId Merchant Id
     * @param catId Category Id
     * @param expand Expandable field: [items]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static categoryUpdateCategory(
        mId: string,
        catId: string,
        expand?: string,
        requestBody?: Category,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/categories/{catId}',
            path: {
                'mId': mId,
                'catId': catId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a single item category
     * @param mId Merchant Id
     * @param catId Category Id
     * @returns any
     * @throws ApiError
     */
    public static categoryDeleteCategory(
        mId: string,
        catId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/categories/{catId}',
            path: {
                'mId': mId,
                'catId': catId,
            },
        });
    }

    /**
     * Update the order for categories on the menu at a time, up to 1000 categories.
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static categoryUpdateCategorySortOrders(
        mId: string,
        requestBody?: CategorySortOrderArray,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/categories/bulk_sort_orders',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all items in a single category
     * @param mId Merchant Id
     * @param catId Category Id
     * @param filter Filter fields: [modifiedTime, deleted, sortOrder, name, colorCode, id]
     * @param expand Expandable fields: [categories, itemStock, modifierRates, options, tags, taxRates]
     * @returns Item
     * @throws ApiError
     */
    public static categoryGetCategoryItems(
        mId: string,
        catId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/categories/{catId}/items',
            path: {
                'mId': mId,
                'catId': catId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all categories of a single item
     * @param mId Merchant Id
     * @param itemId Item Id
     * @param filter Filter fields: [modifiedTime, deleted, sortOrder, name, colorCode, id]
     * @param expand Expandable field: [items]
     * @returns Category
     * @throws ApiError
     */
    public static categoryGetItemCategories(
        mId: string,
        itemId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/items/{itemId}/categories',
            path: {
                'mId': mId,
                'itemId': itemId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create or delete associations between items and categories
     * @param mId Merchant Id
     * @param expand Expandable field: [items]
     * @param _delete Setting this to `true` removes associations specified in the request body
     * @returns CategoryItem
     * @throws ApiError
     */
    public static categoryCreateOrDeleteCategoryItems(
        mId: string,
        expand?: string,
        _delete?: boolean,
    ): CancelablePromise<CategoryItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/category_items',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
                'delete': _delete,
            },
        });
    }

    /**
     * Create or delete associations between items and tax rates
     * @param mId Merchant Id
     * @param _delete Setting this to `true` removes associations specified in the request body
     * @returns TaxRateItem
     * @throws ApiError
     */
    public static taxrateCreateOrDeleteTaxRateItems(
        mId: string,
        _delete?: boolean,
    ): CancelablePromise<TaxRateItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tax_rate_items',
            path: {
                'mId': mId,
            },
            query: {
                'delete': _delete,
            },
        });
    }

    /**
     * Get items by tax rate
     * @param mId Merchant Id
     * @param taxId Tax Id
     * @param filter Filter fields: [modifiedTime, hidden, itemCode, available, option.id, modifierGroup.id, autoManage, price, id, sku, defaultTaxRates, tags.id, alternateName, isRevenue, tags.name, deleted, item.id, name, itemStock.quantity, itemGroup.id]
     * @param expand Expandable fields: [items]
     * @returns Item
     * @throws ApiError
     */
    public static taxrateGetItemsByTaxRate(
        mId: string,
        taxId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tax_rates/{taxId}/items',
            path: {
                'mId': mId,
                'taxId': taxId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all modifier groups
     * These groupings are the categories different modifiers belong to. Modifier groups can be made available for specific inventory Items by creating an item to modifier group association.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, category.id, negativeSortOrder, item.id, sortOrder, name, id, showByDefault]
     * @param expand Expandable fields: [modifiers, items]
     * @returns ModifierGroup
     * @throws ApiError
     */
    public static modifierGetModifierGroups(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<ModifierGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/modifier_groups',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create a modifier group
     * Create a new modifier group. Modifiers can be associated with a modifier group after it has been created.
     * @param mId Merchant Id
     * @param expand Expandable fields: [modifiers, items]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static modifierCreateModifierGroup(
        mId: string,
        expand?: string,
        requestBody?: ModifierGroup,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/modifier_groups',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete modifier groups
     * Deletes multiple modifier groups in a single request. Add a query string with the parameter `modifierGroupIds` and a comma-separated list of one or more `modifierGroupId` values.
     *
     * Use this example to create a request to delete three modifierGroups:
     * {merchantId}/modifierGroups?modifierGroupIds={modifierGroupId},{modifierGroupId},{modifierGroupId}
     * @param mId Merchant Id
     * @returns any
     * @throws ApiError
     */
    public static modifierBulkDeleteModifierGroups(
        mId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/modifier_groups',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get a modifier group
     * Get a single modifier group by it's UUID
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param expand Expandable fields: [modifiers, items]
     * @returns ModifierGroup
     * @throws ApiError
     */
    public static modifierGetModifierGroup(
        mId: string,
        modGroupId: string,
        expand?: string,
    ): CancelablePromise<ModifierGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a modifier group
     * Update a modifier group. In order to add modifiers use the create modifiers endpoint.
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param expand Expandable fields: [modifiers, items]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static modifierUpdateModifierGroup(
        mId: string,
        modGroupId: string,
        expand?: string,
        requestBody?: ModifierGroup,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a modifier group
     * Delete an existing modifier group, identified by UUID. This also deletes all modifiers within that group.
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @returns any
     * @throws ApiError
     */
    public static modifierDeleteModifierGroup(
        mId: string,
        modGroupId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
            },
        });
    }

    /**
     * Create or delete associations between items and modifier groups
     * Create or delete one or more association objects (item modifier groups). Modifiers can only be applied to items associated with that modifier's group. Learn more about object associations here: https://docs.clover.com/docs/using-object-associations
     * @param mId Merchant Id
     * @param _delete Setting this to `true` removes associations specified in the request body
     * @returns ItemModifierGroup
     * @throws ApiError
     */
    public static modifierCreateOrDeleteItemModifierGroups(
        mId: string,
        _delete?: boolean,
    ): CancelablePromise<ItemModifierGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/item_modifier_groups',
            path: {
                'mId': mId,
            },
            query: {
                'delete': _delete,
            },
        });
    }

    /**
     * Update the priorities for a collection of up to 200 modifier groups at a time
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static modifierUpdateModifierGroupSortOrders(
        mId: string,
        requestBody?: ModifierGroupArray,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/modifier_group_sort_orders',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reorder modifiers in the modifier group based on the ordering of the incoming modifier id list. Remove deleted modifiers. Add missing modifiers.
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param requestBody
     * @returns Reference
     * @throws ApiError
     */
    public static modifierReorderModifiers(
        mId: string,
        modGroupId: string,
        requestBody?: IdArray,
    ): CancelablePromise<Reference> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}/layout',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all items in a single modifier group
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param filter Filter fields: [modifiedTime, hidden, itemCode, available, option.id, modifierGroup.id, autoManage, price, id, sku, defaultTaxRates, tags.id, alternateName, isRevenue, tags.name, deleted, item.id, name, itemStock.quantity, itemGroup.id]
     * @param expand Expandable fields: [tags, categories, taxRates, modifierGroups, itemStock, options]
     * @returns Item
     * @throws ApiError
     */
    public static modifierGetModifierGroupItems(
        mId: string,
        modGroupId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}/items',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all modifiers
     * Get all modifiers regardless of their modifier group.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, price, name, alternateName, id, modifierGroup.id]
     * @param expand Expandable field: [modifierGroup]
     * @returns Modifier
     * @throws ApiError
     */
    public static modifierGetModifiers(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Modifier> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/modifiers',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all modifiers belonging to a single modifier group
     * Get an array containing the modifiers in a single modifier group.
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param filter Filter fields: [modifiedTime, price, name, alternateName, id, modifierGroup.id]
     * @param expand Expandable fields: [modifiers, items]
     * @returns Modifier
     * @throws ApiError
     */
    public static modifierGetModifiersByGroup(
        mId: string,
        modGroupId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Modifier> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create a modifier
     * Create a modifier object belonging to the modifier group identified in the URL.
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param expand Expandable field: [modifierGroup]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static modifierCreateModifier(
        mId: string,
        modGroupId: string,
        expand?: string,
        requestBody?: Modifier,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single modifier
     * Get a single modifier by it's group, and it's UUID
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param modId
     * @param expand Expandable field: [modifierGroup]
     * @returns Modifier
     * @throws ApiError
     */
    public static modifierGetModifier(
        mId: string,
        modGroupId: string,
        modId: string,
        expand?: string,
    ): CancelablePromise<Modifier> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
                'modId': modId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a single modifier
     * Update a modifier. Note that once it has been created, it is not possible to change a modifier's group.
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param modId
     * @param expand Expandable field: [modifierGroup]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static modifierUpdateModifier(
        mId: string,
        modGroupId: string,
        modId: string,
        expand?: string,
        requestBody?: Modifier,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
                'modId': modId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a single modifier
     * Delete a single modifier by it's UUID
     * @param mId Merchant Id
     * @param modGroupId Modifier Group Id
     * @param modId
     * @returns any
     * @throws ApiError
     */
    public static modifierDeleteModifier(
        mId: string,
        modGroupId: string,
        modId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}',
            path: {
                'mId': mId,
                'modGroupId': modGroupId,
                'modId': modId,
            },
        });
    }

    /**
     * Get all attributes
     * See the description for 'get all item groups'.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, name, id, deletedTime, itemGroup.id]
     * @returns Attribute
     * @throws ApiError
     */
    public static inventoryGetAttributes(
        mId: string,
        filter?: string,
    ): CancelablePromise<Attribute> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/attributes',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Create an attribute
     * @param mId Merchant Id
     * @param expand Expandable fields: [options]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryCreateAttribute(
        mId: string,
        expand?: string,
        requestBody?: Attribute,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/attributes',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single attribute
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @returns Attribute
     * @throws ApiError
     */
    public static inventoryGetAttribute(
        mId: string,
        attributeId: string,
    ): CancelablePromise<Attribute> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/attributes/{attributeId}',
            path: {
                'mId': mId,
                'attributeId': attributeId,
            },
        });
    }

    /**
     * Update a single attribute
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @param expand Expandable fields: [options]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryUpdateAttribute(
        mId: string,
        attributeId: string,
        expand?: string,
        requestBody?: Attribute,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/attributes/{attributeId}',
            path: {
                'mId': mId,
                'attributeId': attributeId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a single attribute
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryDeleteAttribute(
        mId: string,
        attributeId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/attributes/{attributeId}',
            path: {
                'mId': mId,
                'attributeId': attributeId,
            },
        });
    }

    /**
     * Get all options
     * See the description for 'get all item groups'.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, item.id, name, attribute.id, id, deletedTime]
     * @param expand Expandable fields: []
     * @returns Option
     * @throws ApiError
     */
    public static inventoryGetOptions(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Option> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/options',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Get all options with a given attribute
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @param filter Filter fields: [modifiedTime, item.id, name, attribute.id, id, deletedTime]
     * @param expand Expandable fields: []
     * @returns Option
     * @throws ApiError
     */
    public static inventoryGetOptionsByAttribute(
        mId: string,
        attributeId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Option> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/attributes/{attributeId}/options',
            path: {
                'mId': mId,
                'attributeId': attributeId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create an option
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @param expand Expandable fields: []
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryCreateOption(
        mId: string,
        attributeId: string,
        expand?: string,
        requestBody?: Option,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/attributes/{attributeId}/options',
            path: {
                'mId': mId,
                'attributeId': attributeId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get an attribute and option by ID
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @param optionId Option Id
     * @param filter Filter fields: [modifiedTime, item.id, name, attribute.id, id, deletedTime]
     * @param expand Expandable fields: []
     * @returns Option
     * @throws ApiError
     */
    public static inventoryGetOptionById(
        mId: string,
        attributeId: string,
        optionId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Option> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}',
            path: {
                'mId': mId,
                'attributeId': attributeId,
                'optionId': optionId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Update an option
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @param optionId Option Id
     * @param expand Expandable fields: []
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryUpdateOption(
        mId: string,
        attributeId: string,
        optionId: string,
        expand?: string,
        requestBody?: Option,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}',
            path: {
                'mId': mId,
                'attributeId': attributeId,
                'optionId': optionId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an option
     * @param mId Merchant Id
     * @param attributeId Attribute Id
     * @param optionId Option Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryDeleteOption(
        mId: string,
        attributeId: string,
        optionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}',
            path: {
                'mId': mId,
                'attributeId': attributeId,
                'optionId': optionId,
            },
        });
    }

    /**
     * Create or delete item/option association
     * See the description for 'get all item groups'.
     * @param mId Merchant Id
     * @param _delete Setting this to `true` removes associations specified in the request body
     * @returns OptionItem
     * @throws ApiError
     */
    public static inventoryCreateOrDeleteOptionItems(
        mId: string,
        _delete?: boolean,
    ): CancelablePromise<OptionItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/option_items',
            path: {
                'mId': mId,
            },
            query: {
                'delete': _delete,
            },
        });
    }

    /**
     * Get all discounts
     * @param mId Merchant Id
     * @param filter Filter fields: [amount, modifiedtime, percentage, id]
     * @returns Discount
     * @throws ApiError
     */
    public static inventoryGetDiscounts(
        mId: string,
        filter?: string,
    ): CancelablePromise<Discount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/discounts',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Create a discount
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryCreateDiscount(
        mId: string,
        requestBody?: Discount,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/discounts',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single discount
     * @param mId Merchant Id
     * @param discountId Discount Id
     * @returns Discount
     * @throws ApiError
     */
    public static inventoryGetDiscount(
        mId: string,
        discountId: string,
    ): CancelablePromise<Discount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/discounts/{discountId}',
            path: {
                'mId': mId,
                'discountId': discountId,
            },
        });
    }

    /**
     * Update an discount
     * @param mId Merchant Id
     * @param discountId Discount Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static inventoryUpdateDiscount(
        mId: string,
        discountId: string,
        requestBody?: Discount,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/discounts/{discountId}',
            path: {
                'mId': mId,
                'discountId': discountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a discount
     * @param mId Merchant Id
     * @param discountId Discount Id
     * @returns any
     * @throws ApiError
     */
    public static inventoryDeleteDiscount(
        mId: string,
        discountId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/discounts/{discountId}',
            path: {
                'mId': mId,
                'discountId': discountId,
            },
        });
    }

    /**
     * Get all tax exemption rules
     * Get a list of tax exemption rules which links order types to items in an order to exclude certain tax rates from those items
     * @param mId Merchant Id
     * @returns TaxRule
     * @throws ApiError
     */
    public static taxrulesGetTaxRules(
        mId: string,
    ): CancelablePromise<TaxRule> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tax_rules',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get an individual tax exemption rule
     * Returns the tax exemption rule specified in the request
     * @param mId Merchant Id
     * @param taxRuleId
     * @returns TaxRule
     * @throws ApiError
     */
    public static taxrulesGetTaxRule(
        mId: string,
        taxRuleId: string,
    ): CancelablePromise<TaxRule> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tax_rules/{taxRuleId}',
            path: {
                'mId': mId,
                'taxRuleId': taxRuleId,
            },
        });
    }

}
