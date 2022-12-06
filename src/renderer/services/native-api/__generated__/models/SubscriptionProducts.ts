/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';
import type { SubscriptionProduct } from './SubscriptionProduct';

/**
 * response of /subscription-products
 */
export type SubscriptionProducts = {
    response_head?: ResponseHead;
    response_body?: Array<SubscriptionProduct>;
};

