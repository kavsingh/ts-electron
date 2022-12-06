/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionPricePoint = {
    /**
     * Price point ID.
     */
    item_price_id?: string;
    /**
     * Title of the price point in external subscription service.
     */
    system_title?: string;
    /**
     * Price point currency.
     */
    currency?: string;
    /**
     * Cycle of the subscription price point.
     */
    period?: number;
    /**
     * Cycle unit, for example: month, year, day.
     */
    period_unit?: string;
    /**
     * Price for subscription cycle.
     */
    price?: string;
};

