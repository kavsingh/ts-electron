/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllResourcesResponse } from '../models/AllResourcesResponse';
import type { SingleResourceResponse } from '../models/SingleResourceResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ResourcesService {

    /**
     * Returns all known resources and category memberships, grouped by UPID.
     * @returns AllResourcesResponse OK
     * @throws ApiError
     */
    public static getAllResources(): CancelablePromise<AllResourcesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resources/',
            errors: {
                401: `Invalid application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns the Resource with the given `rid`. The `rid` has to be a valid UUID (see [`uuid.UUID`](https://docs.python.org/3/library/uuid.html#uuid.UUID)).
     * @param rid
     * @returns SingleResourceResponse OK
     * @throws ApiError
     */
    public static getSingleResource(
        rid: string,
    ): CancelablePromise<SingleResourceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resources/{rid}',
            path: {
                'rid': rid,
            },
            errors: {
                401: `Invalid application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

}
