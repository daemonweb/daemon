/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type Category = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The name of the category which will appear in Clover Register App.
     */
    name: string;
    /**
     * Integer used to determine how this category is sorted against other categories.
     */
    sortOrder?: number;
    /**
     * Ordered list of items associated with this category.
     */
    items?: Array<Reference>;
    /**
     * Hex code representation of the color assigned to this category and its items, in the form of #fff, #ffffff, or #ffffffff
     */
    colorCode?: string;
    /**
     * Whether the category has been deleted.
     */
    deleted?: boolean;
    /**
     * The time this category was last modified
     */
    modifiedTime?: number;
    /**
     * Reference to canonical category
     */
    canonical?: Reference;
};

