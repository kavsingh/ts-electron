/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Resource } from './Resource';
import type { ResponseHead } from './ResponseHead';

export type SingleResourceResponse = {
    response_head: ResponseHead;
    response_body: {
        resource: Resource;
    };
};

