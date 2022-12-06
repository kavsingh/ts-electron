/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Resource } from './Resource';

export type ProductWithResource = {
    upid: string;
    categories?: Array<string>;
    resources?: Array<Resource>;
};

