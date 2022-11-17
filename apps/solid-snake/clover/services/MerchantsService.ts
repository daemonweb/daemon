/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { Device } from '../models/Device';
import type { Gateway } from '../models/Gateway';
import type { HoursSet } from '../models/HoursSet';
import type { Merchant } from '../models/Merchant';
import type { MerchantProperties } from '../models/MerchantProperties';
import type { OrderType } from '../models/OrderType';
import type { OrderTypeCategory } from '../models/OrderTypeCategory';
import type { Role } from '../models/Role';
import type { ServiceCharge } from '../models/ServiceCharge';
import type { SystemOrderType } from '../models/SystemOrderType';
import type { Tender } from '../models/Tender';
import type { TipSuggestion } from '../models/TipSuggestion';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MerchantsService {

    /**
     * Get a single merchant
     * @param mId Merchant Id
     * @param expand Expandable fields: [employees, bankProcessing, externalMerchant, merchantBoarding, merchantL3Prerequisite, deviceBoarding, programExpress, hierarchy, shifts, orders, address, logos, owner, items, tags, tenders, payments, gateway, printers, modifierGroups, properties, tipSuggestions, openingHours, partnerApp, selfBoardingApplication, enterprises, equipment, equipmentSummary]
     * @returns Merchant
     * @throws ApiError
     */
    public static merchantGetMerchant(
        mId: string,
        expand?: string,
    ): CancelablePromise<Merchant> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}',
            path: {
                'mId': mId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a merchant
     * @param mId Merchant Id
     * @param expand Expandable fields: [employees, bankProcessing, externalMerchant, merchantBoarding, merchantL3Prerequisite, deviceBoarding, programExpress, hierarchy, shifts, orders, address, logos, owner, items, tags, tenders, payments, gateway, printers, modifierGroups, properties, tipSuggestions, openingHours, partnerApp, selfBoardingApplication, enterprises, equipment, equipmentSummary]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static merchantUpdateMerchant(
        mId: string,
        expand?: string,
        requestBody?: Merchant,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}',
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
     * Get a merchant's address
     * @param mId Merchant Id
     * @returns Address
     * @throws ApiError
     */
    public static merchantGetMerchantAddress(
        mId: string,
    ): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/address',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get a merchant's payment gateway configuration
     * @param mId Merchant Id
     * @returns Gateway
     * @throws ApiError
     */
    public static merchantGetMerchantGateway(
        mId: string,
    ): CancelablePromise<Gateway> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/gateway',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get a merchant's properties
     * @param mId Merchant Id
     * @returns MerchantProperties
     * @throws ApiError
     */
    public static merchantGetMerchantProperties(
        mId: string,
    ): CancelablePromise<MerchantProperties> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/properties',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Update merchant properties
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static merchantUpdateMerchantProperties(
        mId: string,
        requestBody?: MerchantProperties,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/properties',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get default service charge for a merchant
     * The Merchant's default service charge, set via the Setup App (https://www.clover.com/setupapp).
     * @param mId Merchant Id
     * @returns ServiceCharge
     * @throws ApiError
     */
    public static merchantGetDefaultServiceCharge(
        mId: string,
    ): CancelablePromise<ServiceCharge> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/default_service_charge',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * @deprecated
     * Get a sync token (deprecated)
     * @param mId Merchant Id
     * @param table Table Name
     * @returns any
     * @throws ApiError
     */
    public static syncGetSyncToken(
        mId: string,
        table: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/sync/{table}',
            path: {
                'mId': mId,
                'table': table,
            },
        });
    }

    /**
     * Get all tip suggestions for a merchant
     * @param mId Merchant Id
     * @param filter Filter fields: [flatTip, percentage, name, id, enabled]
     * @returns TipSuggestion
     * @throws ApiError
     */
    public static merchantGetTipSuggestions(
        mId: string,
        filter?: string,
    ): CancelablePromise<TipSuggestion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tip_suggestions',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get a single tip suggestion
     * @param mId Merchant Id
     * @param tId
     * @returns TipSuggestion
     * @throws ApiError
     */
    public static merchantGetTipSuggestion(
        mId: string,
        tId: string,
    ): CancelablePromise<TipSuggestion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tip_suggestions/{tId}',
            path: {
                'mId': mId,
                'tId': tId,
            },
        });
    }

    /**
     * Update a single tip suggestion
     * @param mId Merchant Id
     * @param tId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static merchantUpdateTipSuggestion(
        mId: string,
        tId: string,
        requestBody?: TipSuggestion,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tip_suggestions/{tId}',
            path: {
                'mId': mId,
                'tId': tId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all order types for a merchant
     * Merchants have the ability to create custom order types via the Setup App (https://www.clover.com/setupapp). These custom order types can be associated with a System Order Type (see /v3/merchants/{mId}/system_order_types). Custom Order Types can support items in all categories (filterCategories=false) or a subset of the merchant's categories (filterCategories=true and categories property contains the list of supported categories). Note that when expanding the categories for an order type, they will only be returned if this orderType only supports a subset of the categories (filterCategories=true). If the orderType supports all categories (filterCategories=false) then you should make a GET request to /v3/merchants/{mId}/categories.
     * @param mId Merchant Id
     * @param filter Filter fields: [id, deletedTime]
     * @param expand Expandable fields: [hours, attributes, categories]
     * @returns OrderType
     * @throws ApiError
     */
    public static merchantGetOrderTypes(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<OrderType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/order_types',
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
     * Create Order Type For Merchant
     * @param mId Merchant Id
     * @param expand Expandable fields: [hours, attributes, categories]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static merchantCreateOrderType(
        mId: string,
        expand?: string,
        requestBody?: OrderType,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/order_types',
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
     * Get a single order type
     * @param mId Merchant Id
     * @param orderTypeId Order Type Id
     * @param expand Expandable fields: [hours, attributes, categories]
     * @returns OrderType
     * @throws ApiError
     */
    public static merchantGetOrderType(
        mId: string,
        orderTypeId: string,
        expand?: string,
    ): CancelablePromise<OrderType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/order_types/{orderTypeId}',
            path: {
                'mId': mId,
                'orderTypeId': orderTypeId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a single order type
     * @param mId Merchant Id
     * @param orderTypeId Order Type Id
     * @param expand Expandable fields: [hours, attributes, categories]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static merchantUpdateOrderType(
        mId: string,
        orderTypeId: string,
        expand?: string,
        requestBody?: OrderType,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/order_types/{orderTypeId}',
            path: {
                'mId': mId,
                'orderTypeId': orderTypeId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an order type
     * @param mId Merchant Id
     * @param orderTypeId Order Type Id
     * @returns any
     * @throws ApiError
     */
    public static merchantDeleteOrderType(
        mId: string,
        orderTypeId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/order_types/{orderTypeId}',
            path: {
                'mId': mId,
                'orderTypeId': orderTypeId,
            },
        });
    }

    /**
     * Create or delete associations between order types and categories
     * @param mId Merchant Id
     * @param _delete Setting this to `true` removes associations specified in the request body
     * @returns OrderTypeCategory
     * @throws ApiError
     */
    public static orderCreateOrDeleteOrderTypeCategories(
        mId: string,
        _delete?: boolean,
    ): CancelablePromise<OrderTypeCategory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/order_type_categories',
            path: {
                'mId': mId,
            },
            query: {
                'delete': _delete,
            },
        });
    }

    /**
     * Return a list of system order types
     * Merchants can create custom Order Types via "/v3/merchants/{mId}/order_types". It is useful to associate these custom order types with particular system order types in order to group things functionally. For example, a merchant may have a "Lunch Take-Out" order type and a "Dinner Take-Out" order type. These two order types can be associated with the "TAKE-OUT-TYPE" system order type so that applications can understand that they are both take-out order types.
     * @param mId Merchant Id
     * @returns SystemOrderType
     * @throws ApiError
     */
    public static merchantGetSystemOrderTypes(
        mId: string,
    ): CancelablePromise<SystemOrderType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/system_order_types',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Get all roles from a merchant
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, systemRole, name, id, deletedTime]
     * @param expand Expandable fields: [employees]
     * @returns Role
     * @throws ApiError
     */
    public static roleGetRoles(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/roles',
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
     * Create a role
     * @param mId Merchant Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static roleCreateRole(
        mId: string,
        requestBody?: Role,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/roles',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single role
     * @param mId Merchant Id
     * @param roleId
     * @param expand Expandable fields: [employees]
     * @returns Role
     * @throws ApiError
     */
    public static roleGetRole(
        mId: string,
        roleId: string,
        expand?: string,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/roles/{roleId}',
            path: {
                'mId': mId,
                'roleId': roleId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a single role
     * @param mId Merchant Id
     * @param roleId
     * @param expand Expandable fields: [employees]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static roleUpdateRole(
        mId: string,
        roleId: string,
        expand?: string,
        requestBody?: Role,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/roles/{roleId}',
            path: {
                'mId': mId,
                'roleId': roleId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a role
     * @param mId Merchant Id
     * @param roleId
     * @returns any
     * @throws ApiError
     */
    public static roleDeleteRole(
        mId: string,
        roleId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/roles/{roleId}',
            path: {
                'mId': mId,
                'roleId': roleId,
            },
        });
    }

    /**
     * Get all tenders for a merchant
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, visible, merchantId, instruction, systemTenderId, label, id, labelKey, opensCashDrawer, deletedTime, enabled]
     * @returns Tender
     * @throws ApiError
     */
    public static payGetMerchantTenders(
        mId: string,
        filter?: string,
    ): CancelablePromise<Tender> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tenders',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Adds a new tender
     * Returns an object representing newly added merchant tender, with a generated ID.
     * @param mId Merchant Id
     * @param requestBody
     * @returns Tender
     * @throws ApiError
     */
    public static payCreateMerchantTender(
        mId: string,
        requestBody?: Tender,
    ): CancelablePromise<Tender> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tenders',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single merchant tender
     * @param mId Merchant Id
     * @param tenderId Tender Id
     * @returns Tender
     * @throws ApiError
     */
    public static payGetMerchantTender(
        mId: string,
        tenderId: string,
    ): CancelablePromise<Tender> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/tenders/{tenderId}',
            path: {
                'mId': mId,
                'tenderId': tenderId,
            },
        });
    }

    /**
     * Updates an existing tender
     * Returns an object representing updated merchant tender.
     * @param mId Merchant Id
     * @param tenderId Tender Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static payUpdateMerchantTender(
        mId: string,
        tenderId: string,
        requestBody?: Tender,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/tenders/{tenderId}',
            path: {
                'mId': mId,
                'tenderId': tenderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes an existing tender
     * @param mId Merchant Id
     * @param tenderId Tender Id
     * @returns any
     * @throws ApiError
     */
    public static payDeleteMerchantTender(
        mId: string,
        tenderId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/tenders/{tenderId}',
            path: {
                'mId': mId,
                'tenderId': tenderId,
            },
        });
    }

    /**
     * Get a list this merchant opening hours
     * @param mId Merchant Id
     * @returns HoursSet
     * @throws ApiError
     */
    public static merchantGetAllMerchantOpeningHours(
        mId: string,
    ): CancelablePromise<HoursSet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/opening_hours',
            path: {
                'mId': mId,
            },
        });
    }

    /**
     * Create a set of merchant opening hours
     * @param mId Merchant Id
     * @param requestBody
     * @returns HoursSet
     * @throws ApiError
     */
    public static merchantCreateMerchantOpeningHours(
        mId: string,
        requestBody?: HoursSet,
    ): CancelablePromise<HoursSet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/opening_hours',
            path: {
                'mId': mId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a specific set of merchant opening hours
     * @param mId Merchant Id
     * @param hId
     * @returns HoursSet
     * @throws ApiError
     */
    public static merchantGetMerchantOpeningHours(
        mId: string,
        hId: string,
    ): CancelablePromise<HoursSet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/opening_hours/{hId}',
            path: {
                'mId': mId,
                'hId': hId,
            },
        });
    }

    /**
     * Update a set of merchant opening hours
     * @param mId Merchant Id
     * @param hId
     * @param requestBody
     * @returns HoursSet
     * @throws ApiError
     */
    public static merchantUpdateMerchantOpeningHours(
        mId: string,
        hId: string,
        requestBody?: HoursSet,
    ): CancelablePromise<HoursSet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/opening_hours/{hId}',
            path: {
                'mId': mId,
                'hId': hId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a set of merchant opening hours
     * @param mId Merchant Id
     * @param hId
     * @returns any
     * @throws ApiError
     */
    public static merchantDeleteMerchantOpeningHours(
        mId: string,
        hId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/opening_hours/{hId}',
            path: {
                'mId': mId,
                'hId': hId,
            },
        });
    }

    /**
     * Get all devices provisioned to a merchant
     * Returns a list of all devices that are provisioned to the a merchant. This list can be viewed from the Setup App on the merchant's device or web dashboard (https://www.clover.com/setupapp/m/{mId}/devices).
     * @param mId Merchant Id
     * @param filter Filter fields: [serial, name, merchant.id, merchant.name, deviceTypeName, model, id, deleted_time, orderPrefix]
     * @returns Device
     * @throws ApiError
     */
    public static deviceGetMerchantDevices(
        mId: string,
        filter?: string,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/devices',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get a single device provisioned to a merchant
     * Returns a single device that is provisioned to a merchant.
     * @param mId Merchant Id
     * @param deviceId Device Id
     * @returns Device
     * @throws ApiError
     */
    public static deviceGetMerchantDevice(
        mId: string,
        deviceId: string,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/devices/{deviceId}',
            path: {
                'mId': mId,
                'deviceId': deviceId,
            },
        });
    }

}
