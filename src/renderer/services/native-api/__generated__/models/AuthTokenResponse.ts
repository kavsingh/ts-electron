/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';
import type { Token } from './Token';

/**
 * response of /auth/token
 */
export type AuthTokenResponse = {
    response_head: ResponseHead;
    response_body: {
        access: Token;
        refresh: Token;
        /**
         * user id from the authentication service
         */
        user_id: string;
    };
};

