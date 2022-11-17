/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TipSuggestion = {
    id?: string;
    /**
     * Name of the tip
     */
    name?: string;
    /**
     * Suggested tip percentage
     */
    percentage?: number;
    /**
     * Suggested tip amount
     */
    amount?: number;
    isEnabled?: boolean;
    /**
     * Suggested flat tip amount
     */
    flatTip?: number;
};

