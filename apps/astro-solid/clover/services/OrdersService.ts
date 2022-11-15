/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLineItemsRequest } from '../models/CreateLineItemsRequest';
import type { Discount } from '../models/Discount';
import type { LineItem } from '../models/LineItem';
import type { Modification } from '../models/Modification';
import type { Order } from '../models/Order';
import type { OrderCheckoutRequest } from '../models/OrderCheckoutRequest';
import type { OrderCheckoutResponse } from '../models/OrderCheckoutResponse';
import type { OrderSubmitRequest } from '../models/OrderSubmitRequest';
import type { Payment } from '../models/Payment';
import type { ServiceCharge } from '../models/ServiceCharge';
import type { VoidedItemsSummary } from '../models/VoidedItemsSummary';
import type { VoidedLineItem } from '../models/VoidedLineItem';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrdersService {

    /**
     * Create an atomic order
     * Creates a complete order—including line items, modifiers, discounts, and service charges—with a single API call. If you need to create an order with custom or ad-hoc line items, then you must use the `/v3/orders` endpoint. See the documentation for [Working with orders](https://docs.clover.com/docs/working-with-orders).
     *
     * See the documentation for [400 Bad Request errors](https://docs.clover.com/docs/working-with-orders#handling-400-bad-request-errors).
     * @param mId Merchant Id
     * @param requestBody
     * @returns Order
     * @throws ApiError
     */
    public static orderCreateAtomicOrder(
        mId: string,
        requestBody?: OrderSubmitRequest,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/atomic_order/orders',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Checkout an atomic order
     * Build an order; calculate totals, taxes, discounts, and service charges; and display summary information. The response includes order cart information, the order total, and taxes. See the documentation for [Working with orders](https://docs.clover.com/docs/working-with-orders).
     *
     * See the documentation for [400 Bad Request errors](https://docs.clover.com/docs/working-with-orders#handling-400-bad-request-errors).
     * @param mId Merchant Id
     * @param requestBody
     * @returns OrderCheckoutResponse
     * @throws ApiError
     */
    public static orderCheckoutAtomicOrder(
        mId: string,
        requestBody?: OrderCheckoutRequest,
    ): CancelablePromise<OrderCheckoutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/atomic_order/checkouts',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Gets a list of orders
     * Returns a list of orders. See https://docs.clover.com/build/working-with-orders/ for more details.
     * @param mId Merchant Id
     * @param filter Filter fields: [employee.id, note, modifiedTime, orderType, touched, cardTransaction.last4, manualTransaction, employee.name, title, device.id, externalReferenceId, clientCreatedTime, total, payType, testMode, createdTime, id, state, deletedTime]
     * @param expand Expandable fields: [employee, payments, refunds, credits, voids, payment.tender, payment.cardTransaction, lineItems, customers, serviceCharge, discounts, orderType, lineItems.discounts, lineItems.modifications]
     * @returns Order
     * @throws ApiError
     */
    public static orderGetOrders(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/orders',
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
     * Create custom orders
     * Create or update orders with a non-Clover inventory and dynamically calculate taxes. Valid fields are `taxRemoved`, `note`, `title`, `state`, `testMode`, `manualTransaction`, `groupLineItems` and `orderType`. Use separate calls to add line items. See the documentation for [Creating custom orders](https://docs.clover.com/docs/creating-custom-orders).
     *
     * Use the Atomic orders endpoint to create orders using a Clover inventory and leverage the real-time totals and tax calculation features. See the documentation for [Working with orders](https://docs.clover.com/docs/working-with-orders).
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderCreateOrder(
        mId: string,
        requestBody?: Order,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single order
     * Returns a single order. See https://docs.clover.com/build/working-with-orders/ for more details.
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param expand Expandable fields: [lineItems, serviceCharge, discounts, credits, payments, customers, orderFulfillmentEvent, refunds]
     * @returns Order
     * @throws ApiError
     */
    public static orderGetOrder(
        mId: string,
        orderId: string,
        expand?: string,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/orders/{orderId}',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param expand Expandable fields: [lineItems, serviceCharge, discounts, credits, payments, customers, orderFulfillmentEvent, refunds]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderUpdateOrder(
        mId: string,
        orderId: string,
        expand?: string,
        requestBody?: Order,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @returns any
     * @throws ApiError
     */
    public static orderDeleteOrder(
        mId: string,
        orderId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders/{orderId}',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
        });
    }

    /**
     * Delete an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @returns any
     * @throws ApiError
     */
    public static orderDeleteOrderWithReasonHandler(
        mId: string,
        orderId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders_v2/{orderId}',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
        });
    }

    /**
     * Get all discounts for an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @returns Discount
     * @throws ApiError
     */
    public static orderGetOrderDiscounts(
        mId: string,
        orderId: string,
    ): CancelablePromise<Discount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/orders/{orderId}/discounts',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
        });
    }

    /**
     * Create a discount on an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderCreateDiscount(
        mId: string,
        orderId: string,
        requestBody?: Discount,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/discounts',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an order discount
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param discountId Discount Id
     * @returns any
     * @throws ApiError
     */
    public static orderRemoveOrderDiscount(
        mId: string,
        orderId: string,
        discountId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders/{orderId}/discounts/{discountId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'discountId': discountId,
            },
        });
    }

    /**
     * Get all line items for an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param expand Expandable fields: [employee, orderType, discounts, modifications, taxRates, payments]
     * @returns LineItem
     * @throws ApiError
     */
    public static orderGetOrderLineItems(
        mId: string,
        orderId: string,
        expand?: string,
    ): CancelablePromise<LineItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Create a new line item
     * Requests must include a price or inventory item id.
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderCreateLineItem(
        mId: string,
        orderId: string,
        requestBody?: LineItem,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete all the line items in an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @returns any
     * @throws ApiError
     */
    public static orderDeleteLineItems(
        mId: string,
        orderId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
        });
    }

    /**
     * Get a line item
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param lineItemId Line Item Id
     * @param expand Expandable fields: [employee, orderType, discounts, modifications, taxRates, payments]
     * @returns LineItem
     * @throws ApiError
     */
    public static orderGetOrderLineItem(
        mId: string,
        orderId: string,
        lineItemId: string,
        expand?: string,
    ): CancelablePromise<LineItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'lineItemId': lineItemId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a line item
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param lineItemId Line Item Id
     * @param expand Expandable fields: [employee, orderType, discounts, modifications, taxRates, payments]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderUpdateOrderLineItem(
        mId: string,
        orderId: string,
        lineItemId: string,
        expand?: string,
        requestBody?: LineItem,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'lineItemId': lineItemId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Void a line item
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param lineItemId Line Item Id
     * @returns any
     * @throws ApiError
     */
    public static orderDeleteOrderLineItem(
        mId: string,
        orderId: string,
        lineItemId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'lineItemId': lineItemId,
            },
        });
    }

    /**
     * Create a discount on a line item
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param lineItemId Line Item Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderCreateLineItemDiscount(
        mId: string,
        orderId: string,
        lineItemId: string,
        requestBody?: Discount,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/discounts',
            path: {
                'mId': mId,
                'orderId': orderId,
                'lineItemId': lineItemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a discount
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param lineItemId Line Item Id
     * @param discountId Discount Id
     * @returns any
     * @throws ApiError
     */
    public static orderRemoveDiscount(
        mId: string,
        orderId: string,
        lineItemId: string,
        discountId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/discounts/{discountId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'lineItemId': lineItemId,
                'discountId': discountId,
            },
        });
    }

    /**
     * Apply a modification to a line item
     * Create a modification, a record of a modifier as it exists at the time it is applied to the lineItem. To view current modifications use an 'expand=modifications' query parameter on the lineItem. To learn more about applying a modification see: https://docs.clover.com/build/working-with-orders/#add-item-modifiers
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param lineItemId Line Item Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderApplyModification(
        mId: string,
        orderId: string,
        lineItemId: string,
        requestBody?: Modification,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/modifications',
            path: {
                'mId': mId,
                'orderId': orderId,
                'lineItemId': lineItemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove a modification from a line item
     * Delete a modification by UUID, removing the record of an applied modification
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param lineItemId Line Item Id
     * @param modificationId
     * @returns any
     * @throws ApiError
     */
    public static orderRemoveModification(
        mId: string,
        orderId: string,
        lineItemId: string,
        modificationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{lineItemId}/modifications/{modificationId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'lineItemId': lineItemId,
                'modificationId': modificationId,
            },
        });
    }

    /**
     * Create multiple line items
     * Create multiple line items in a single request. Each item must include a price for the request to succeed. The maximum number of line items per request is 100.
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderBulkCreateLineItems(
        mId: string,
        orderId: string,
        requestBody?: CreateLineItemsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/bulk_line_items',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a payment record on an order
     * The payment must include a positive amount and a valid tender ID. A merchant's tenders and their IDs can be retrieved from /v3/merchants/mId/tenders.
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderCreatePaymentForOrder(
        mId: string,
        orderId: string,
        requestBody?: Payment,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/payments',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Apply a service charge to an order
     * The request body must include the merchant's service charge ID. This ID can be retrieved from /v3/merchants/mId/default_service_charge. Each request can set a different name and percentageDecimal as needed for an order.
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderApplyServiceCharge(
        mId: string,
        orderId: string,
        requestBody?: ServiceCharge,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/service_charge/',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove service charge from an order
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param chargeId Service Charge Id
     * @returns any
     * @throws ApiError
     */
    public static orderRemoveServiceCharge(
        mId: string,
        orderId: string,
        chargeId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/orders/{orderId}/service_charge/{chargeId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'chargeId': chargeId,
            },
        });
    }

    /**
     * Void a line item
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderVoidOrderLineItem(
        mId: string,
        orderId: string,
        requestBody?: VoidedLineItem,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/voided_line_items',
            path: {
                'mId': mId,
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get order line items that were recorded after a void
     * @param mId Merchant Id
     * @param filter Filter fields: [reason, quantity, orderId, revenueClassName, deleteType, isRevenue, approvedByUuid, sortByName, printed, orderType.id, price, name, showInReporting, lineItemUuid, id, deletedTime]
     * @returns VoidedLineItem
     * @throws ApiError
     */
    public static lineitemGetVoidedOrderLineItems(
        mId: string,
        filter?: string,
    ): CancelablePromise<VoidedLineItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/voided_line_items',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get summary about line items and orders which were deleted
     * @param mId Merchant Id
     * @param filter Filter fields: [reason, quantity, orderId, revenueClassName, deleteType, isRevenue, approvedByUuid, sortByName, printed, orderType.id, price, name, showInReporting, lineItemUuid, id, deletedTime]
     * @returns VoidedItemsSummary
     * @throws ApiError
     */
    public static handlerGetVoidedLineItemsTotals(
        mId: string,
        filter?: string,
    ): CancelablePromise<VoidedItemsSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/voided_line_items/totals',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Create or exchange a line item
     * @param mId Merchant Id
     * @param orderId Order Id
     * @param oldLineItemId Old Line Item Id
     * @param lineItemId Line Item Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static orderSetOrderLineItem(
        mId: string,
        orderId: string,
        oldLineItemId: string,
        lineItemId: string,
        requestBody?: LineItem,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/orders/{orderId}/line_items/{oldLineItemId}/exchange/{lineItemId}',
            path: {
                'mId': mId,
                'orderId': orderId,
                'oldLineItemId': oldLineItemId,
                'lineItemId': lineItemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
