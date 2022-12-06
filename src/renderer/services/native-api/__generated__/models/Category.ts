/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Category = {
    /**
     * Category id
     */
    id?: string;
    /**
     * Category Name
     */
    name?: string;
    /**
     * Id of category's parent (used for only subcategories)
     */
    parent_id?: string;
    /**
     * Category sorting priority
     */
    sort_order?: number;
};

