/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionPageCreation = {
    /**
     * Type of the subscription page to be requested.
     */
    type: SubscriptionPageCreation.type;
    /**
     * Only for the checkout type. SDBS licensed product ID. Required if type='checkout'.
     */
    product_id?: string;
    /**
     * Only for the checkout type. Redirect URL to which external subscription service will do redirection after purchase.
     */
    redirect_url?: string;
    /**
     * Only for the checkout type. Payment currency, if not provided detected from customer country stored in account profile.
     */
    currency_code?: string;
    /**
     * Only for the checkout type. Subscription cycle, default: month
     */
    period_unit?: string;
    /**
     * Only for the checkout type. Billing address first name, default: first name from enduser account profile.
     */
    billing_first_name?: string;
    /**
     * Only for the checkout type. Billing address last name, default: surname from enduser account profile.
     */
    billing_last_name?: string;
    /**
     * Only for the checkout type. Billing address street.
     */
    billing_line1?: string;
    /**
     * Only for the checkout type. Billing address city.
     */
    billing_city?: string;
    /**
     * Only for the checkout type. Billing address state.
     */
    billing_state?: string;
    /**
     * Only for the checkout type. Billing address zip.
     */
    billing_zip?: string;
    /**
     * Only for the checkout type. Billing address country iso code, default: country from enduser account profile.
     */
    billing_country?: string;
    /**
     * Only for the checkout type. Price point for product subscription (taken from external subscription service), by default determined from currency_code and period_unit.
     */
    item_price_id?: string;
    /**
     * Only for the checkout type. Preferable language of checkout form, expect iso code. Default: SDBS enduser language.
     */
    language?: string;
};

export namespace SubscriptionPageCreation {

    /**
     * Type of the subscription page to be requested.
     */
    export enum type {
        CHECKOUT = 'checkout',
        MANAGEMENT = 'management',
        PAYMENT_METHODS = 'payment_methods',
    }


}

