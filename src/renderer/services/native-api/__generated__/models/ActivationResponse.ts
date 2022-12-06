/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivationError } from './ActivationError';
import type { ActivationMethod } from './ActivationMethod';
import type { ResponseHead } from './ResponseHead';

export type ActivationResponse = {
    response_head: ResponseHead;
    response_body: {
        response_list?: Array<{
            serial: string;
            result?: string;
            error?: ActivationError;
        }>;
        method?: ActivationMethod;
    };
};

