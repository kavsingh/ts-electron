/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivationRequest } from '../models/ActivationRequest';
import type { ActivationResponse } from '../models/ActivationResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActivationsService {

    /**
     * Activates a list of product serials and system IDs. Returns a list of responses, each containing a `serial` field containing the serial that was to be activated and either a `result` field in case of success, or an `error` field, which is structured exactly like `field_errors` described in Response structure & fields.
     *
     * Accepts an optional `method` parameter to determine the activation method that’s to be used.
     *
     * When a RAS3 bundled product is to be activated you must include both serial numbers for the bundle master and bundle members.
     *
     * When activating a bundle master an empty string as a system ID is allowed.
     * @param requestBody
     * @returns ActivationResponse OK
     * @throws ApiError
     */
    public static activate(
        requestBody: ActivationRequest,
    ): CancelablePromise<ActivationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activations/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                422: `RAS3 activation currently supports only one serial at a time.`,
                500: `Internal Server Error`,
            },
        });
    }

}
