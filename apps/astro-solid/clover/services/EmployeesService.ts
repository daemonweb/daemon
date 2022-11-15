/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';
import type { Order } from '../models/Order';
import type { Shift } from '../models/Shift';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeesService {

    /**
     * Get all employees
     * Gives information for every employee associated to a merchant by default. Accepts optional filter and expand query parameters.
     * @param mId Merchant Id
     * @param filter Filter fields: [modifiedTime, role, role.id, customId, name, nickname, id, deletedTime, deleted_time, email]
     * @param expand Expandable fields: [roles, shifts]
     * @returns Employee
     * @throws ApiError
     */
    public static employeeGetEmployees(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Employee> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/employees',
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
     * Create an employee
     * Creates an employee for a merchant. Accepts optional expand parameters.
     * @param mId Merchant Id
     * @param expand Expandable fields: [shifts, payments, orders, roles]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static employeeCreateEmployee(
        mId: string,
        expand?: string,
        requestBody?: Employee,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/employees',
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
     * Get a single employee
     * Returns information for a single employee.  Accepts optional expand query parameters
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param expand Expandable fields: [roles, shifts]
     * @returns Employee
     * @throws ApiError
     */
    public static employeeGetEmployee(
        mId: string,
        empId: string,
        expand?: string,
    ): CancelablePromise<Employee> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/employees/{empId}',
            path: {
                'mId': mId,
                'empId': empId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update an employee
     * Updates information for a single employee. Accepts optional expand query params.
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param expand Expandable fields: [shifts, payments, orders, roles]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static employeeUpdateEmployee(
        mId: string,
        empId: string,
        expand?: string,
        requestBody?: Employee,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/employees/{empId}',
            path: {
                'mId': mId,
                'empId': empId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an employee
     * Deletes a single employee from a merchant, also can't delete the 'owner' employee.
     * @param mId Merchant Id
     * @param empId Employee Id
     * @returns any
     * @throws ApiError
     */
    public static employeeDeleteEmployee(
        mId: string,
        empId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/employees/{empId}',
            path: {
                'mId': mId,
                'empId': empId,
            },
        });
    }

    /**
     * Get all shifts
     * @param mId Merchant Id
     * @param filter Filter fields: [employee.id, out_time, in_time, employee.name, in_and_override_time, out_and_override_time, id, has_in_time, override_in_time, deletedTime, server_banking]
     * @param expand Expandable fields: [employee, overrideInEmployee, overrideOutEmployee]
     * @returns Shift
     * @throws ApiError
     */
    public static merchantGetAllShifts(
        mId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Shift> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/shifts',
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
     * Get a single shift
     * @param mId Merchant Id
     * @param shiftId Employee Shift Id
     * @param expand Expandable fields: [employee, overrideInEmployee, overrideOutEmployee]
     * @returns Shift
     * @throws ApiError
     */
    public static merchantGetShift(
        mId: string,
        shiftId: string,
        expand?: string,
    ): CancelablePromise<Shift> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/shifts/{shiftId}',
            path: {
                'mId': mId,
                'shiftId': shiftId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Get .csv of all shifts
     * @param mId Merchant Id
     * @param filter Filter fields: [employee.id, out_time, in_time, employee.name, in_and_override_time, out_and_override_time, id, has_in_time, override_in_time, deletedTime, server_banking]
     * @returns any
     * @throws ApiError
     */
    public static merchantGetAllShiftsCsv(
        mId: string,
        filter?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/shifts.csv',
            path: {
                'mId': mId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get all shifts for an employee
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param filter Filter fields: [employee.id, out_time, in_time, employee.name, in_and_override_time, out_and_override_time, id, has_in_time, override_in_time, deletedTime, server_banking]
     * @param expand Expandable fields: [employee, overrideInEmployee, overrideOutEmployee]
     * @returns Shift
     * @throws ApiError
     */
    public static employeeGetEmployeeShifts(
        mId: string,
        empId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Shift> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/employees/{empId}/shifts',
            path: {
                'mId': mId,
                'empId': empId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

    /**
     * Create shift for an employee
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static employeeCreateShift(
        mId: string,
        empId: string,
        requestBody?: Shift,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/employees/{empId}/shifts',
            path: {
                'mId': mId,
                'empId': empId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a single shift
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param shiftId Employee Shift Id
     * @param expand Expandable fields: [employee, overrideInEmployee, overrideOutEmployee]
     * @returns Shift
     * @throws ApiError
     */
    public static employeeGetEmployeeShift(
        mId: string,
        empId: string,
        shiftId: string,
        expand?: string,
    ): CancelablePromise<Shift> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/employees/{empId}/shifts/{shiftId}',
            path: {
                'mId': mId,
                'empId': empId,
                'shiftId': shiftId,
            },
            query: {
                'expand': expand,
            },
        });
    }

    /**
     * Update a single shift
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param shiftId Employee Shift Id
     * @param expand Expandable fields: [employee, overrideInEmployee, overrideOutEmployee]
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static employeeUpdateShift(
        mId: string,
        empId: string,
        shiftId: string,
        expand?: string,
        requestBody?: Shift,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/merchants/{mId}/employees/{empId}/shifts/{shiftId}',
            path: {
                'mId': mId,
                'empId': empId,
                'shiftId': shiftId,
            },
            query: {
                'expand': expand,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a single shift
     * When sending a request, you must include an X-Clover-Account-Id header. The value of the header must be the ID of an employee with the permission to edit shifts.
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param shiftId Employee Shift Id
     * @returns any
     * @throws ApiError
     */
    public static employeeDeleteShift(
        mId: string,
        empId: string,
        shiftId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/merchants/{mId}/employees/{empId}/shifts/{shiftId}',
            path: {
                'mId': mId,
                'empId': empId,
                'shiftId': shiftId,
            },
        });
    }

    /**
     * Get all orders for an employee
     * @param mId Merchant Id
     * @param empId Employee Id
     * @param filter Filter fields: [lineItems, serviceCharge, discounts, credits, payments, customers, orderFulfillmentEvent, refunds]
     * @param expand Expandable fields: [lineItems, serviceCharge, discounts, credits, payments, customers, orderFulfillmentEvent, refunds]
     * @returns Order
     * @throws ApiError
     */
    public static employeeGetEmployeeOrders(
        mId: string,
        empId: string,
        filter?: string,
        expand?: string,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/merchants/{mId}/employees/{empId}/orders',
            path: {
                'mId': mId,
                'empId': empId,
            },
            query: {
                'filter': filter,
                'expand': expand,
            },
        });
    }

}
