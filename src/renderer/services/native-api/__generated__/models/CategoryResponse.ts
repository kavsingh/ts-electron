/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';
import type { ResponseHead } from './ResponseHead';

export type CategoryResponse = {
    response_head?: ResponseHead;
    response_body?: {
        categories?: Array<Category>;
    };
};

