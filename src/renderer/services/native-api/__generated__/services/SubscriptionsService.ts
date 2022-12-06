/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Subscription } from '../models/Subscription';
import type { SubscriptionBundleResponse } from '../models/SubscriptionBundleResponse';
import type { SubscriptionCancellationReasons } from '../models/SubscriptionCancellationReasons';
import type { SubscriptionCancellationStatus } from '../models/SubscriptionCancellationStatus';
import type { SubscriptionCreation } from '../models/SubscriptionCreation';
import type { SubscriptionInvoice } from '../models/SubscriptionInvoice';
import type { SubscriptionPage } from '../models/SubscriptionPage';
import type { SubscriptionPageCreation } from '../models/SubscriptionPageCreation';
import type { SubscriptionPricePoints } from '../models/SubscriptionPricePoints';
import type { SubscriptionProducts } from '../models/SubscriptionProducts';
import type { SubscriptionStatus } from '../models/SubscriptionStatus';
import type { SubscriptionUserInfo } from '../models/SubscriptionUserInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubscriptionsService {

    /**
     * Returns all details about subscription specified by ID.
     * @param subscriptionId Subscription ID.
     * @returns Subscription Subscription details
     * @throws ApiError
     */
    public static getSubscriptionDetails(
        subscriptionId: number,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscription_id}',
            path: {
                'subscription_id': subscriptionId,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create subscription.
     * @param requestBody
     * @returns Subscription Subscription details
     * @throws ApiError
     */
    public static createSubscription(
        requestBody: SubscriptionCreation,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation errors`,
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Get all subscription Bundles. If a product_id is given it will return all the bundles that have the product.
     * @param licensedproductId SDBS licensed product Id
     * @returns SubscriptionBundleResponse Subscription Bundles
     * @throws ApiError
     */
    public static getSubscriptionBundles(
        licensedproductId?: number,
    ): CancelablePromise<SubscriptionBundleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/bundles',
            query: {
                'licensedproduct_id': licensedproductId,
            },
            errors: {
                400: `Validation errors`,
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Updates the status of the subscription
     * @param subscriptionId Subscription ID.
     * @param requestBody
     * @returns Subscription Subscription information
     * @throws ApiError
     */
    public static updateSubscriptionStatus(
        subscriptionId: number,
        requestBody: (SubscriptionStatus | SubscriptionCancellationStatus),
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/subscription/{subscription_id}/',
            path: {
                'subscription_id': subscriptionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param nativeId Native ID.
     * @returns SubscriptionUserInfo Customer information from subscription service with billing address.
     * @throws ApiError
     */
    public static getUsersSubscriptionInformation(
        nativeId: string,
    ): CancelablePromise<SubscriptionUserInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/users/{native_id}',
            path: {
                'native_id': nativeId,
            },
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param subscriptionId Subscription ID.
     * @returns SubscriptionInvoice Invoices
     * @throws ApiError
     */
    public static getSubscriptionInvoices(
        subscriptionId: number,
    ): CancelablePromise<SubscriptionInvoice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscription_id}/invoices',
            path: {
                'subscription_id': subscriptionId,
            },
        });
    }

    /**
     * @returns SubscriptionCancellationReasons List of cancellation reasons
     * @throws ApiError
     */
    public static getSubscriptionCancellationReasons(): CancelablePromise<SubscriptionCancellationReasons> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/cancellation_reasons',
        });
    }

    /**
     * Create subscription page URL.
     * @param requestBody
     * @returns SubscriptionPage Subscription page details
     * @throws ApiError
     */
    public static createSubscriptionPageUrl(
        requestBody?: SubscriptionPageCreation,
    ): CancelablePromise<SubscriptionPage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscription-pages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation errors`,
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns all available subscription plans for provided product and a country.
     * @param productId SDBS licensed product Id
     * @param country Country code. If not provided detected from client IP
     * @returns SubscriptionPricePoints List of available plans
     * @throws ApiError
     */
    public static findSubscriptionPlans(
        productId: number,
        country?: string,
    ): CancelablePromise<SubscriptionPricePoints> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscription-plans',
            query: {
                'product_id': productId,
                'country': country,
            },
            errors: {
                400: `Validation errors`,
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Returns all licensed products which are working under subscription license.
     * @returns SubscriptionProducts List of available products with subscription license
     * @throws ApiError
     */
    public static findSubscriptionProducts(): CancelablePromise<SubscriptionProducts> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscription-products',
            errors: {
                401: `Invalid basic auth credentials or access/application token`,
                500: `Internal Server Error`,
            },
        });
    }

}
