/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';
import type { SubscriptionBundle } from './SubscriptionBundle';

export type SubscriptionBundleResponse = {
    response_head?: ResponseHead;
    response_body?: {
        bundles?: Array<SubscriptionBundle>;
    };
};

