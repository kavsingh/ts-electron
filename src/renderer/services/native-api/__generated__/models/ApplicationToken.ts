/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Used for identification of clients. Can be created in the API (manually).
 */
export type ApplicationToken = {
    sub?: string;
    iat?: number;
    exp?: number;
    data?: {
        version?: string;
        name?: string;
    };
};

