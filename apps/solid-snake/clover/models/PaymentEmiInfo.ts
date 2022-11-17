/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentEmiInfo = {
    /**
     * Customer’s mobile phone number
     */
    mobileNumber?: string;
    /**
     * EMI Indicator
     */
    indicator?: string;
    /**
     * Transaction Amount, i.e., Product Amount - Discount
     */
    transactionAmount?: number;
    /**
     * Full product amount (without discount)
     */
    productAmount?: number;
    /**
     * Discount offered for the product
     */
    discountAmount?: number;
    /**
     * Tenure in months
     */
    tenure?: number;
    /**
     * EMI transaction interest rate
     */
    interestRate?: number;
    /**
     * EMI transaction interest amount
     */
    interestAmount?: number;
    /**
     * The processing fee for EMI transaction
     */
    processingFee?: number;
    /**
     * Total amount to be paid by a customer, i.e., EMI per month * Tenure
     */
    totalAmount?: number;
    /**
     * Transaction amount per month
     */
    amountPerMonth?: number;
};

