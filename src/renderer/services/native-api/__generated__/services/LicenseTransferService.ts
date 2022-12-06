/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicenseTransferRequest } from '../models/LicenseTransferRequest';
import type { LicenseTransferResponse } from '../models/LicenseTransferResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LicenseTransferService {

    /**
     * Queues license transfer request.
     * @param requestBody
     * @returns LicenseTransferResponse Transfer request is successfully added to queue. `job_id` is returned.
     * @throws ApiError
     */
    public static licenseTransfer(
        requestBody: LicenseTransferRequest,
    ): CancelablePromise<LicenseTransferResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/license-transfer/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Registrations are invalid.`,
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

}
