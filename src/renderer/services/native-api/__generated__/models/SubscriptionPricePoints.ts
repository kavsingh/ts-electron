/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';
import type { SubscriptionPricePoint } from './SubscriptionPricePoint';

/**
 * response of /subscription-plans
 */
export type SubscriptionPricePoints = {
    response_head?: ResponseHead;
    response_body?: {
        price_points?: Array<SubscriptionPricePoint>;
    };
};

