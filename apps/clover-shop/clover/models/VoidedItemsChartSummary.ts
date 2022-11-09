/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VoidedItemsChartData } from './VoidedItemsChartData';

export type VoidedItemsChartSummary = {
    /**
     * flag to indicate if any line item has modifiers
     */
    hasModifiers?: boolean;
    /**
     * revenue classes data
     */
    chartData?: Array<VoidedItemsChartData>;
    /**
     * totals of all the chart data
     */
    chartTotals?: VoidedItemsChartData;
};

