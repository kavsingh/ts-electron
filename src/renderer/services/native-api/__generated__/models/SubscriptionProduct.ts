/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductBasicData } from './ProductBasicData';
import type { SubscriptionExtensionItem } from './SubscriptionExtensionItem';
import type { SubscriptionPricePoint } from './SubscriptionPricePoint';

export type SubscriptionProduct = {
    /**
     * Licensed Product ID.
     */
    id?: number;
    /**
     * Licensed product title.
     */
    title?: string;
    /**
     * Product which was licensed with subscription.
     */
    product?: ProductBasicData;
    /**
     * List of price points for this licensed product.
     */
    price_points?: Array<SubscriptionPricePoint>;
    /**
     * List of licensed products required to be own by enduser to be enabled for this subscription.
     */
    extension_to?: Array<SubscriptionExtensionItem>;
};

