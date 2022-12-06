/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseHead } from './ResponseHead';

export type LicenseTransferResponse = {
    response_head: ResponseHead;
    response_body: {
        job?: {
            job_id?: string;
        };
    };
};

