/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';

export type GetUsersMeResponse = {
    response_head: ResponseHead;
    response_body: {
        user_id?: string;
        first_name?: string;
        last_name?: string;
        country?: string;
        language?: string;
        username?: string;
        email_verified?: boolean;
        ecommerce_status?: GetUsersMeResponse.ecommerce_status;
    };
};

export namespace GetUsersMeResponse {

    export enum ecommerce_status {
        NEW = 'new',
        RETURNING = 'returning',
        UNKNOWN = 'unknown',
    }


}

