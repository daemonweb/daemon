/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee } from './Employee';

export type Shift = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The employee that worked this shift
     */
    employee?: Employee;
    /**
     * Amount of cash tips collected
     */
    cashTipsCollected?: number;
    /**
     * Whether the employee used server banking
     */
    serverBanking?: boolean;
    /**
     * Clock in time
     */
    inTime?: number;
    /**
     * Overridden clock in time
     */
    overrideInTime?: number;
    /**
     * The employee who overrode the clock in time
     */
    overrideInEmployee?: Employee;
    /**
     * Clock out time
     */
    outTime?: number;
    /**
     * Overridden clock out time
     */
    overrideOutTime?: number;
    /**
     * The employee who overrode the clock out time
     */
    overrideOutEmployee?: Employee;
};

