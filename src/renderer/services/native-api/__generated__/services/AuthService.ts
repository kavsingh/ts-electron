/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthTokenResponse } from '../models/AuthTokenResponse';
import type { Credentials } from '../models/Credentials';
import type { ResponseHead } from '../models/ResponseHead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Returns a new pair of Access and Refresh Tokens if the given credentials are correct and the Application Token in the Request Header has been registered.
     * @param requestBody username and password used to authenticate
     * @returns AuthTokenResponse Returns a new pair of Access and Refresh Tokens if the given credentials are correct and the Application Token in the Request Header is valid.
     * @throws ApiError
     */
    public static authenticate(
        requestBody: Credentials,
    ): CancelablePromise<AuthTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid application token or wrong credentials`,
            },
        });
    }

    /**
     * Requests a new Access and Refresh Tokens with an existing Refresh Token. This method does not expect an input message, it is sufficient to specify the Refresh Token as Bearer in the Request Header.
     * @returns AuthTokenResponse Returns a new pair of Access and Refresh Tokens if the given credentials are correct and the Application Token in the Request Header has been registered.
     * @throws ApiError
     */
    public static refreshToken(): CancelablePromise<AuthTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh_token',
            errors: {
                401: `Refresh token could not be verified.`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Recovers password for a native instruments user based on username.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static recoverPassword(
        requestBody: {
            username?: string;
        },
    ): CancelablePromise<{
        response_head?: ResponseHead;
        response_body?: {
            message?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/recover_password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid application token`,
                422: `Validation errors`,
                500: `Internal Server Error`,
            },
        });
    }

}
