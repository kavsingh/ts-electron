/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationResponse } from '../models/ConfigurationResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConfigurationsService {

    /**
     * Return all public settings for Native-API.
     * @param pkFormat Request Public Keys in provided format, supported values: SubjectPublicKeyInfo, PKCS1. Default is SubjectPublicKeyInfo.
     * Check SDBS documentation about `get_public_keys` or `get_public_keys_in_format` for more details.
     * @returns ConfigurationResponse OK
     * @throws ApiError
     */
    public static getConfiguration(
        pkFormat?: string,
    ): CancelablePromise<ConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/configurations/',
            query: {
                'pk_format': pkFormat,
            },
            errors: {
                401: `Invalid application token`,
                422: `Validation errors`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Return all public settings for Native-API for requested group.
     * @param group Result will only contain entries for of the specified group.
     * @param pkFormat Request Public Keys in provided format, supported values: SubjectPublicKeyInfo, PKCS1. Default is SubjectPublicKeyInfo.
     * Check SDBS documentation about `get_public_keys` or `get_public_keys_in_format` for more details.
     * @returns ConfigurationResponse OK
     * @throws ApiError
     */
    public static getConfigurationGroup(
        group: string,
        pkFormat?: string,
    ): CancelablePromise<ConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/configurations/{group}',
            path: {
                'group': group,
            },
            query: {
                'pk_format': pkFormat,
            },
            errors: {
                401: `Invalid application token`,
                422: `Validation errors`,
                500: `Internal Server Error`,
            },
        });
    }

}
