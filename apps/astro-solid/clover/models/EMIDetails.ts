/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EMIDetails = {
    /**
     * This field contains the EMI lender name
     */
    lenderName?: string;
    /**
     * This field contains total EMI tenure
     */
    tenure?: string;
    /**
     * This field contains interest rate charged as part of EMI
     */
    interestRate?: string;
    /**
     * This field contains interest amount charged as part of EMI
     */
    interest?: string;
    /**
     * This field contains EMI amount per month
     */
    emiAmount?: string;
    /**
     * This field contains lender loan id for the EMI
     */
    lenderLoanId?: string;
    /**
     * This field contains processing fee charged for EMI
     */
    fees?: string;
    /**
     * This field contains discount amount provided for EMI
     */
    discountAmount?: string;
    /**
     * This field contains offer cashback amount provided for EMI
     */
    offerCashback?: string;
    /**
     * This field contains total transaction amount
     */
    tranAmount?: string;
    /**
     * This field contains total payable amount i.e. total EMI with interest
     */
    totalPayable?: string;
};

