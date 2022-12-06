/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionInvoice = Array<{
    /**
     * Link to download Invoice
     */
    link?: string;
    /**
     * Date of invoice
     */
    date?: number;
    /**
     * Due date of invoice
     */
    due_date?: number;
    /**
     * Ammount paid
     */
    ammount_paid?: string;
}>;
