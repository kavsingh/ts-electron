/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SerialNumberExportsResponse } from '../models/SerialNumberExportsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SerialNumbersService {

    /**
     * Export serial numbers for provided licensed product ID.
     * @param licensedproductId Licensed product ID.
     * @param quantity Amount of serial numbers to export.
     * @param notes Reason of serial numbers export.
     * @param license License which has to be attached to the generated serial numbers. See SDBS Supporter UI for possible values.
     * @returns SerialNumberExportsResponse OK
     * @throws ApiError
     */
    public static exportSerialNumbers(
        licensedproductId: number,
        quantity: number,
        notes: string,
        license?: string,
    ): CancelablePromise<SerialNumberExportsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/supporters/serial_number_exports',
            query: {
                'licensedproduct_id': licensedproductId,
                'quantity': quantity,
                'notes': notes,
                'license': license,
            },
            errors: {
                400: `Validation errors`,
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                422: `No serial numbers left for serials export or licensing error`,
                500: `Internal Server Error`,
            },
        });
    }

}
