/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type License = {
    /**
     * Unique identifier representing a licensed product
     */
    licensedproduct_id?: number;
    /**
     * Serial number of product.
     */
    serial_number?: string;
    /**
     * Licensed product title.
     */
    licensedproduct_title?: string;
    /**
     * Serial prefix of product.
     */
    serialprefix?: string;
    /**
     * Registration date of product.
     */
    registration_date?: string;
    /**
     * License class.
     */
    licenseclass?: string;
    /**
     * License transfer type.
     */
    transfer_type?: string;
    /**
     * License transfer token.
     */
    transfer_token?: string;
    /**
     * Unique identifier representing a specific product
     */
    product_upid?: string;
    /**
     * Registration id used for license transfer.
     */
    registration_id?: number;
};

