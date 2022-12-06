/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';
import type { Token } from './Token';

/**
 * response of /users/
 */
export type SignUpResponse = {
    response_head: ResponseHead;
    response_body: {
        user_id: string;
        tokens: {
            access: Token;
            refresh: Token;
        };
    };
};

