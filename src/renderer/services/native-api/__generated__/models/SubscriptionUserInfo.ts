/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionUserInfo = {
    billing_address?: {
        /**
         * First Name of subscription's billing address
         */
        first_name?: string;
        /**
         * Last name of subscription's billing address
         */
        last_name?: string;
        /**
         * Billing address
         */
        address?: string;
        /**
         * Billing address city
         */
        city?: string;
        /**
         * Billing address state
         */
        state?: string;
        /**
         * Zip Code of billing address
         */
        zip_code?: string;
    };
};

