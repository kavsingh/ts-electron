/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductDifferencesItem } from './ProductDifferencesItem';
import type { ResponseHead } from './ResponseHead';

export type ProductDifferencesResponse = {
    response_head: ResponseHead;
    response_body: Array<ProductDifferencesItem>;
};

