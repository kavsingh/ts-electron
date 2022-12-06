/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Enduser } from '../models/Enduser';
import type { GetUsersMeResponse } from '../models/GetUsersMeResponse';
import type { LicensedProductsResponse } from '../models/LicensedProductsResponse';
import type { LicensesResponse } from '../models/LicensesResponse';
import type { MyProductsResponse } from '../models/MyProductsResponse';
import type { MySubscriptionsResponse } from '../models/MySubscriptionsResponse';
import type { ProductDifferencesResponse } from '../models/ProductDifferencesResponse';
import type { ProductUpgradePathsResponse } from '../models/ProductUpgradePathsResponse';
import type { RegisterProductRequest } from '../models/RegisterProductRequest';
import type { RegisterProductResponse } from '../models/RegisterProductResponse';
import type { RegistrationsResponse } from '../models/RegistrationsResponse';
import type { SignUpResponse } from '../models/SignUpResponse';
import type { UserSignup } from '../models/UserSignup';
import type { UsersMeInputMessage } from '../models/UsersMeInputMessage';
import type { UsersMeResponse } from '../models/UsersMeResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Retrieve enduser data
     * @param id NativeID – unique enduser identifier
     * @returns Enduser Enduser found
     * @throws ApiError
     */
    public static getUser(
        id: string,
    ): CancelablePromise<Enduser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/supporters/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve list of enduser licensedproducts
     * @param id NativeID – unique enduser identifier
     * @returns LicensedProductsResponse Enduser found, licensedproducts provided as list
     * @throws ApiError
     */
    public static getUserLicensedProducts(
        id: string,
    ): CancelablePromise<LicensedProductsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/supporters/users/{id}/licensedproducts',
            path: {
                'id': id,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve list of enduser registrations
     * @param id NativeID – unique enduser identifier
     * @returns RegistrationsResponse Enduser found, registrations provided as list
     * @throws ApiError
     */
    public static getUserRegistrations(
        id: string,
    ): CancelablePromise<RegistrationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/supporters/users/{id}/registrations',
            path: {
                'id': id,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Creates a new user with the given credentials and profile information. Note that this endpoint only requires a valid Application Token for authorization. You don’t have to be authenticated to create a new user, which enables user self-signup from trusted Applications.
     * @param requestBody
     * @returns SignUpResponse Returns a new pair of Access and Refresh Tokens if the signup was successful.
     * @throws ApiError
     */
    public static signUp(
        requestBody: UserSignup,
    ): CancelablePromise<SignUpResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid application token`,
                422: `Validation errors`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve list of enduser licenses
     * @param id NativeID – unique enduser identifier
     * @param includeSubscriptions if true then list contains also subscribed products
     * @returns LicensesResponse Enduser found with list of licenses
     * @throws ApiError
     */
    public static getUserLicenses(
        id: string,
        includeSubscriptions: boolean = false,
    ): CancelablePromise<LicensesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/licenses',
            path: {
                'id': id,
            },
            query: {
                'include_subscriptions': includeSubscriptions,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns the profile information associated with the authenticated user. The user is derived from the Access Token specified in the Request Header.
     * @returns GetUsersMeResponse OK
     * @throws ApiError
     */
    public static getMyUserInfo(): CancelablePromise<GetUsersMeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
            errors: {
                400: `Profile is invalid`,
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Updates the users profile with a given new username or password. The view will not permit both to be updated in one request. Perform same password validation as on account creation.
     * @param requestBody
     * @returns UsersMeResponse Server success message
     * @throws ApiError
     */
    public static updateMyCredentials(
        requestBody: UsersMeInputMessage,
    ): CancelablePromise<UsersMeResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/me',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                422: `Validation errors`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param includeSubscriptions if true then list contains also subscribed products
     * @returns MyProductsResponse A list of products you own.
     * @throws ApiError
     */
    public static getMyProducts(
        includeSubscriptions: boolean = false,
    ): CancelablePromise<MyProductsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/products',
            query: {
                'include_subscriptions': includeSubscriptions,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Registers a new serial into the user’s account.
     * @param requestBody
     * @returns RegisterProductResponse Request was successfully registered.
     * @throws ApiError
     */
    public static addMyProduct(
        requestBody: RegisterProductRequest,
    ): CancelablePromise<RegisterProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/me/products',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param licensedProductId licensed product to compare
     * @returns ProductDifferencesResponse A list of products available in the provided licensed product but not registered as user's products
     * @throws ApiError
     */
    public static getProductDifferences(
        licensedProductId: number,
    ): CancelablePromise<ProductDifferencesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/product_differences',
            query: {
                'licensed_product_id': licensedProductId,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns MySubscriptionsResponse A list of subscriptions you own.
     * @throws ApiError
     */
    public static getMySubscriptions(): CancelablePromise<MySubscriptionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/subscriptions',
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns ProductUpgradePathsResponse Returns the list of own products with corresponding upgrade paths.
     * @throws ApiError
     */
    public static getMyProductUpgradePaths(): CancelablePromise<ProductUpgradePathsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/upgrade_paths',
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

}
