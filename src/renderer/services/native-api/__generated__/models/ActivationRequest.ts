/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivationMethod } from './ActivationMethod';

export type ActivationRequest = {
    request_list?: Array<{
        serial: string;
        system_id: string;
    }>;
    method?: ActivationMethod;
};

