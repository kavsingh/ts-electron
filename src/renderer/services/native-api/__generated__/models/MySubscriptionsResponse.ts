/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';
import type { Subscription } from './Subscription';

/**
 * response of /users/me/subscription
 */
export type MySubscriptionsResponse = {
    response_head?: ResponseHead;
    response_body?: {
        subscriptions?: Array<Subscription>;
    };
};

