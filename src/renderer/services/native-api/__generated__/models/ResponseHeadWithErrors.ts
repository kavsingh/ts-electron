/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Error } from './Error';
import type { ResponseHead } from './ResponseHead';

export type ResponseHeadWithErrors = (ResponseHead & {
    error_message?: {
        error?: Error;
        field_errors?: Array<{
            error?: Error;
            field?: string;
        }>;
    };
});

