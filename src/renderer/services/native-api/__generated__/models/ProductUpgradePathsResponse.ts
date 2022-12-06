/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductUpgradePath } from './ProductUpgradePath';
import type { ResponseHead } from './ResponseHead';

export type ProductUpgradePathsResponse = {
    response_head: ResponseHead;
    response_body: Array<ProductUpgradePath>;
};

