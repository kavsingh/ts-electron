/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompleteChangelogResult } from '../models/CompleteChangelogResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChangelogsService {

    /**
     * Returns the complete Changelog for a given UPID.
     * @param upid
     * @returns CompleteChangelogResult OK
     * @throws ApiError
     */
    public static getCompleteChangelog(
        upid: string,
    ): CancelablePromise<CompleteChangelogResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/changelogs/{upid}',
            path: {
                'upid': upid,
            },
            errors: {
                401: `Invalid application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param upid
     * @param fromVersion
     * @param toVersion
     * @returns CompleteChangelogResult OK
     * @throws ApiError
     */
    public static getPartialChangelog(
        upid: string,
        fromVersion: string,
        toVersion: string,
    ): CancelablePromise<CompleteChangelogResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/changelogs/{upid}/{from_version}/{to_version}',
            path: {
                'upid': upid,
                'from_version': fromVersion,
                'to_version': toVersion,
            },
            errors: {
                401: `Invalid application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

}
