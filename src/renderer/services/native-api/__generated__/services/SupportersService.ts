/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllLicensedProductsResponse } from '../models/AllLicensedProductsResponse';
import type { LicensedProductsResponse } from '../models/LicensedProductsResponse';
import type { NativeIDResponse } from '../models/NativeIDResponse';
import type { RegistrationsResponse } from '../models/RegistrationsResponse';
import type { SerialNumberExportsResponse } from '../models/SerialNumberExportsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SupportersService {

    /**
     * Export serial numbers for provided licensed product ID.
     * @param licensedproductId Licensed product ID.
     * @param quantity Amount of serial numbers to export.
     * @param notes Reason of serial numbers export.
     * @param license License which has to be attached to the generated serial numbers. See SDBS Supporter UI for possible values.
     * @returns SerialNumberExportsResponse OK
     * @throws ApiError
     */
    public static exportSerialNumbers(
        licensedproductId: number,
        quantity: number,
        notes: string,
        license?: string,
    ): CancelablePromise<SerialNumberExportsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/supporters/serial_number_exports',
            query: {
                'licensedproduct_id': licensedproductId,
                'quantity': quantity,
                'notes': notes,
                'license': license,
            },
            errors: {
                400: `Validation errors`,
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                422: `No serial numbers left for serials export or licensing error`,
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
     * Retrieve enduser NativeID by email or SDBS-internal user ID
     * @param email Enduser email – mutually exclusive with user_id
     * @param userId SDBS-internal enduser ID – mutually exclusive with email
     * @returns NativeIDResponse NativeID found
     * @throws ApiError
     */
    public static getSupportersNativeId(
        email?: string,
        userId?: number,
    ): CancelablePromise<NativeIDResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/supporters/native_id',
            query: {
                'email': email,
                'user_id': userId,
            },
            errors: {
                400: `Validation errors`,
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

}
