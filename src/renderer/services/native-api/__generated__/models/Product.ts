/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Product = {
    /**
     * Unique identifier representing a specific product
     */
    upid?: string;
    /**
     * serial number of product.
     */
    serial_number?: string;
    /**
     * registration date name of product.
     */
    registration_date?: number;
    /**
     * product title.
     */
    title?: string;
    /**
     * Product on a subscription
     */
    subscribed?: boolean;
};

