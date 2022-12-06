/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductResponseObject } from './ProductResponseObject';
import type { ResponseHead } from './ResponseHead';

export type ProductResponse = {
    response_head: ResponseHead;
    response_body: {
        products: Array<ProductResponseObject>;
    };
};

