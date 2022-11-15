/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LineItem } from './LineItem';
import type { Reference } from './Reference';

export type VoidedLineItem = {
    /**
     * The line item that was voided
     */
    lineItem?: LineItem;
    merchant?: Reference;
    /**
     * Why was the line item voided
     */
    reason?: string;
    /**
     * Employee who voided the item
     */
    removedBy?: Reference;
    /**
     * Optional. Employee who approved deletion of line item in case current employee does not have the permission
     */
    approvedBy?: Reference;
    /**
     * Indicates if the line item was deleted as part of order delete or a single item delete.
     */
    deleteType?: string;
    /**
     * Optional. Device used to void the line item
     */
    device?: Reference;
    /**
     * Employee who created the order from which the line item was voided
     */
    createdBy?: Reference;
    /**
     * Timestamp of when this line item was deleted
     */
    deletedTime?: number;
    /**
     * Which environment was this recorded in
     */
    environment?: string;
    /**
     * What event on the client removed this? Was it because of moving a table? Or was it plain old deleting a line item?
     */
    clientEventType?: VoidedLineItem.clientEventType;
};

export namespace VoidedLineItem {

    /**
     * What event on the client removed this? Was it because of moving a table? Or was it plain old deleting a line item?
     */
    export enum clientEventType {
        DELETED_LINE_ITEM = 'DELETED_LINE_ITEM',
        MOVED_TABLE = 'MOVED_TABLE',
        LEFT_TABLE = 'LEFT_TABLE',
        CUSTOM_LINE_ITEM_CANCELLED = 'CUSTOM_LINE_ITEM_CANCELLED',
        WHILE_ADDING_LINE_ITEM_CANCELLED = 'WHILE_ADDING_LINE_ITEM_CANCELLED',
    }


}

