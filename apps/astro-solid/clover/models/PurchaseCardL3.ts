/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Level3LineItem } from './Level3LineItem';

export type PurchaseCardL3 = {
    /**
     * Service code extracted from the track data in Field 35. For all card types, Service code is mandatory for all merchants who directly settle through First Data.
     */
    serviceCode?: string;
    /**
     * If the card was swiped via magnetic strip reader for payment, set this indicator true. Also serviceCode will be mandatory if this is true
     */
    magneticStripeInd?: boolean;
    /**
     * List of line items constituting the order using Level3 Purchase card
     */
    level3LineItems?: Array<Level3LineItem>;
};

