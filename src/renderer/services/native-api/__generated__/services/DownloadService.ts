/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DownloadProductsResponse } from '../models/DownloadProductsResponse';
import type { DownloadProductsResponseLegacy } from '../models/DownloadProductsResponseLegacy';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DownloadService {

    /**
     * @deprecated
     * Returns the list of full products (i.e. not updates or players) associated with the given UPID. Deprecated in favour of `GET /download/me/full-products` and `GET /download/me/updates`.
     * @param upid
     * @param showNativeos If false, the response contains all artifacts with `platform != nativeos`. If true, the response contains all artifacts.
     * @param hardwarePlatform If not provided, the response contains all artifacts regardless of their hardware_platform. If provided, the response contains artifacts with matching hardware_platform. Artifacts with `hardware_platform == any` are always returned.
     * @returns DownloadProductsResponseLegacy OK
     * @throws ApiError
     */
    public static downloadProduct(
        upid: string,
        showNativeos?: boolean,
        hardwarePlatform?: string,
    ): CancelablePromise<DownloadProductsResponseLegacy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/download/full-products/{upid}',
            path: {
                'upid': upid,
            },
            query: {
                'show_nativeos': showNativeos,
                'hardware_platform': hardwarePlatform,
            },
            errors: {
                401: `Invalid application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param platform If not provided, the response contains all artifacts regardless of `platform`. If provided, the response contains artifacts with matching platform. If mac or pc is provided, the response also contains artifacts with platform=all.
     *
     * @param hardwarePlatform If not provided, the response contains all artifacts regardless of their `hardware_platform`. If provided, the response contains artifacts with matching hardware_platform. Artifacts with `hardware_platform == any` are always returned.
     *
     * @param platformVersion If not provided, the response contains all artifacts regardless of their `os_min`/`os_max`. If provided, and if platform is provided, the response contains all artifacts where `os_min <= platform_version <= os_max`. If `os_min` is `null`, that is equivalent to `0`, and if `os_max` is `null`, that is equivalent to `+Inf`.
     *
     * @param latestOnly If set to `true`, single artifact with latest version available will be returned
     * @param includeSubscriptions If set to `true`, response will also contains subscription products
     * @returns DownloadProductsResponse Returns the list of artifacts for full-products of products you own.
     * @throws ApiError
     */
    public static getMyFullProductsDownloads(
        platform?: 'pc' | 'mac' | 'linux-x86_64' | 'nativeos',
        hardwarePlatform?: 'mas-x86_64',
        platformVersion?: string,
        latestOnly: boolean = false,
        includeSubscriptions: boolean = false,
    ): CancelablePromise<DownloadProductsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/download/me/full-products',
            query: {
                'platform': platform,
                'hardware_platform': hardwarePlatform,
                'platform_version': platformVersion,
                'latest_only': latestOnly,
                'include_subscriptions': includeSubscriptions,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @deprecated
     * Returns the list of updates associated with the given UPID. Deprecated in favour of `GET /download/me/full-products` and `GET /download/me/updates`.
     * @param upid
     * @param showNativeos If false, the response contains all artifacts with `platform != nativeos`. If true, the response contains all artifacts.
     * @param hardwarePlatform If not provided, the response contains all artifacts regardless of their hardware_platform. If provided, the response contains artifacts with matching hardware_platform. Artifacts with `hardware_platform == any` are always returned.
     * @returns DownloadProductsResponseLegacy OK
     * @throws ApiError
     */
    public static downloadProductUpdates(
        upid: string,
        showNativeos?: boolean,
        hardwarePlatform?: string,
    ): CancelablePromise<DownloadProductsResponseLegacy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/download/updates/{upid}',
            path: {
                'upid': upid,
            },
            query: {
                'show_nativeos': showNativeos,
                'hardware_platform': hardwarePlatform,
            },
            errors: {
                401: `Invalid application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param platform If not provided, the response contains all artifacts regardless of `platform`. If provided, the response contains artifacts with matching platform. If mac or pc is provided, the response also contains artifacts with platform=all.
     *
     * @param hardwarePlatform If not provided, the response contains all artifacts regardless of their `hardware_platform`. If provided, the response contains artifacts with matching hardware_platform. Artifacts with `hardware_platform == any` are always returned.
     *
     * @param platformVersion If not provided, the response contains all artifacts regardless of their `os_min`/`os_max`. If provided, and if platform is provided, the response contains all artifacts where `os_min <= platform_version <= os_max`. If `os_min` is `null`, that is equivalent to `0`, and if `os_max` is `null`, that is equivalent to `+Inf`.
     *
     * @param latestOnly If set to `true`, single artifact with latest version available will be returned
     * @param includeSubscriptions If set to `true` response will contains also subscription products
     * @returns DownloadProductsResponse Returns the list of artifacts for updates of products you own.
     * @throws ApiError
     */
    public static getMyProductUpdatesDownloads(
        platform?: 'pc' | 'mac' | 'linux-x86_64' | 'nativeos',
        hardwarePlatform?: 'mas-x86_64',
        platformVersion?: string,
        latestOnly: boolean = false,
        includeSubscriptions: boolean = false,
    ): CancelablePromise<DownloadProductsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/download/me/updates',
            query: {
                'platform': platform,
                'hardware_platform': hardwarePlatform,
                'platform_version': platformVersion,
                'latest_only': latestOnly,
                'include_subscriptions': includeSubscriptions,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param platform If not provided, the response contains all artifacts regardless of `platform`. If provided, the response contains artifacts with matching platform. If mac or pc is provided, the response also contains artifacts with platform=all.
     *
     * @param hardwarePlatform If not provided, the response contains all artifacts regardless of their `hardware_platform`. If provided, the response contains artifacts with matching hardware_platform. Artifacts with `hardware_platform == any` are always returned.
     *
     * @param platformVersion If not provided, the response contains all artifacts regardless of their `os_min`/`os_max`. If provided, and if platform is provided, the response contains all artifacts where `os_min <= platform_version <= os_max`. If `os_min` is `null`, that is equivalent to `0`, and if `os_max` is `null`, that is equivalent to `+Inf`.
     *
     * @param latestOnly If set to `true`, single artifact with latest version available will be returned
     * @param includeSubscriptions If set to `true` response will contains also subscription products
     * @returns DownloadProductsResponse Returns the list of artifacts for content releases of products you own.
     * @throws ApiError
     */
    public static getMyProductContentDownloads(
        platform?: 'pc' | 'mac' | 'linux-x86_64' | 'nativeos',
        hardwarePlatform?: 'mas-x86_64',
        platformVersion?: string,
        latestOnly: boolean = false,
        includeSubscriptions: boolean = false,
    ): CancelablePromise<DownloadProductsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/download/me/content',
            query: {
                'platform': platform,
                'hardware_platform': hardwarePlatform,
                'platform_version': platformVersion,
                'latest_only': latestOnly,
                'include_subscriptions': includeSubscriptions,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @deprecated
     * Returns the list of players associated with the given UPID. No longer used by current versions of NA and the daemon.
     * @param upid
     * @returns DownloadProductsResponseLegacy OK
     * @throws ApiError
     */
    public static downloadPlayer(
        upid: string,
    ): CancelablePromise<DownloadProductsResponseLegacy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/download/players/{upid}',
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
     * Retrieves the list of links for the given UPID and file ID. If the ‘authentication required’ box is ticked in UDM2 for the given file, you’ll need to provide a valid access token in the Authorization header.
     *
     * This returns a metalink file.
     * @param upid
     * @param fileId
     * @returns binary ok
     * @throws ApiError
     */
    public static downloadLinks(
        upid: string,
        fileId: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/download/links/{upid}/{file_id}',
            path: {
                'upid': upid,
                'file_id': fileId,
            },
            errors: {
                401: `Invalid application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

}
