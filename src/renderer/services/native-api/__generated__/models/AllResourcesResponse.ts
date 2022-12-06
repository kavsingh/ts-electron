/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductWithResource } from './ProductWithResource';
import type { ResponseHead } from './ResponseHead';

export type AllResourcesResponse = {
    response_head: ResponseHead;
    response_body: {
        mappings?: Array<ProductWithResource>;
    };
};

