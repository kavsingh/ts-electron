/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductWithResource } from './ProductWithResource';
import type { ResponseHead } from './ResponseHead';

export type ProductByUpidResponse = {
    response_head: ResponseHead;
    response_body: ProductWithResource;
};

