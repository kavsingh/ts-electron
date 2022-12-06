/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { License } from './License';
import type { ResponseHead } from './ResponseHead';

/**
 * response of /users/{id}/licenses
 */
export type LicensesResponse = {
    response_head: ResponseHead;
    response_body: {
        licenses: Array<License>;
    };
};

