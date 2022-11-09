/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HourRange } from './HourRange';
import type { Reference } from './Reference';

export type HoursSet = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Friendly name to describe the hours
     */
    name?: string;
    reference?: Reference;
    sunday?: Array<HourRange>;
    monday?: Array<HourRange>;
    tuesday?: Array<HourRange>;
    wednesday?: Array<HourRange>;
    thursday?: Array<HourRange>;
    friday?: Array<HourRange>;
    saturday?: Array<HourRange>;
};

