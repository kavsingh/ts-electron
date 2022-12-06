/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Product } from './Product';
import type { ResponseHead } from './ResponseHead';

/**
 * response of /users/me/products
 */
export type MyProductsResponse = {
    response_head: ResponseHead;
    response_body: {
        products: Array<Product>;
    };
};

