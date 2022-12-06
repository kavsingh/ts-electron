/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllLicensedProductsResponse } from '../models/AllLicensedProductsResponse';
import type { CategoryResponse } from '../models/CategoryResponse';
import type { ProductByUpidResponse } from '../models/ProductByUpidResponse';
import type { ProductResponse } from '../models/ProductResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductsService {

    /**
     * Retrieve list of all licensedproducts
     * @returns AllLicensedProductsResponse licensedproducts provided as list
     * @throws ApiError
     */
    public static getAllLicensedProducts(): CancelablePromise<AllLicensedProductsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/supporters/licensedproducts',
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns the list of all known Product IDs (UPIDs).
     * @returns ProductResponse Returns the list of all known Product IDs (UPIDs).
     * @throws ApiError
     */
    public static getProducts(): CancelablePromise<ProductResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/',
            errors: {
                401: `Invalid application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns all the resources and categories associated with a UPID. Note: this endpoint returns a full, detailed list of all resources attached the given UPID. However, for categories, only the IDs are  returned.
     * The `upid` has to be a valid UUID (see [`uuid.UUID`](https://docs.python.org/3/library/uuid.html#uuid.UUID)).
     * @param upid UPID of product
     * @returns ProductByUpidResponse Returns list of resources for UPID
     * @throws ApiError
     */
    public static getSingleProduct(
        upid: string,
    ): CancelablePromise<ProductByUpidResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{upid}',
            path: {
                'upid': upid,
            },
            errors: {
                401: `Invalid application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns a list of categories, their sort order and relationships.
     * @returns CategoryResponse Returns a list of all categories
     * @throws ApiError
     */
    public static getProductCategories(): CancelablePromise<CategoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/categories',
            errors: {
                401: `Invalid application token`,
                500: `Internal Server Error`,
            },
        });
    }

}
