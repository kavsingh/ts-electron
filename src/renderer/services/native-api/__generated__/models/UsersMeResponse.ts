/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';

/**
 * Response containing server message
 */
export type UsersMeResponse = {
    response_head: ResponseHead;
    response_body: {
        message?: string;
    };
};

