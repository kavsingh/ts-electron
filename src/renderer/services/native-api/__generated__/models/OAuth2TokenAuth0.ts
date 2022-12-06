/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Corresponds to a session, can be valid for 60 min or 24 hours. Is issued by
 * the API on authentication.
 *
 * Retrieving the native-id (user-id) from the token can be
 * done without signature verification. It is however recommended that the user information
 * and native-id are read using the Get Userdata. This can information on whether
 * an account is active by passing the access token.
 *
 */
export type OAuth2TokenAuth0 = {
    iss?: string;
    sub?: string;
    aud?: string;
    iat?: number;
    exp?: number;
    azp?: string;
    scope?: string;
    data?: {
        'native-id'?: string;
    };
    nbf?: number;
};

