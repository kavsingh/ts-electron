/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductUpgradePathItem } from './ProductUpgradePathItem';

export type ProductUpgradePath = {
    /**
     * SDBS primary key of licensed product.
     */
    licensedproduct_id: number;
    /**
     * Title of licensed product.
     */
    title: string;
    /**
     * Flag indicating if product is registered (true) or ready for download (false).
     */
    registered: boolean;
    /**
     * Flag indicating if licensed product is bundle or not.
     */
    bundle: boolean;
    /**
     * License type attached to licensed product.
     */
    license_type: string;
    /**
     * License class attached to licensed product.
     */
    license_class: string;
    /**
     * List of products which can be purchased to upgrade to higher or other related products.
     */
    upgrade_path: Array<ProductUpgradePathItem>;
};

