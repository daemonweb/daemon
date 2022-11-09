/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Modifier } from './Modifier';
import type { Reference } from './Reference';

export type ModifierGroup = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Name of the modifier group
     */
    name?: string;
    alternateName?: string;
    /**
     * The minimum amount of modifiers from this group that must be applied to associated lineItems when using Register
     */
    minRequired?: number;
    /**
     * The maximum amount of modifiers from this group that can be applied to associated lineItems when using Register
     */
    maxAllowed?: number;
    /**
     * Whether employees will be automatically prompted to add modifiers from this category when using Register
     */
    showByDefault?: boolean;
    modifiers?: Array<Modifier>;
    /**
     * An ordered, comma-separated list of modifier ids in this group. (READ ONLY)
     */
    modifierIds?: string;
    items?: Array<Reference>;
    /**
     * The ordinal value used to determine where in an ordered list this modifier group should appear relative to others.
     */
    sortOrder?: number;
};

