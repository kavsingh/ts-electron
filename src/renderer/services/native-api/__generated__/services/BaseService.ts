/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseHead } from '../models/ResponseHead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BaseService {

    /**
     * A simple Ping method to check if the API is up and responding. It does not require any message or parameters and always returns a “pong” message as defined above.
     * @returns any Returns the Pong!
     * @throws ApiError
     */
    public static ping(): CancelablePromise<{
        response_head: ResponseHead;
        response_body: {
            message: 'pong';
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/base/ping',
        });
    }

    /**
     * Always throws an exception. No message required. Don’t expect any output other than a response_head with an error.
     * @returns void
     * @throws ApiError
     */
    public static crash(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/base/crash',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Requests to the SDBS_URI (HAProxy server of SDBS) to verify if it is reachable, if not will return a connection-error response. This endpoint is intended for monitoring purposes, e.g GCP Monitoring (Uptime checks).
     * @returns any Connected to SDBS.
     * @throws ApiError
     */
    public static pingSdbs(): CancelablePromise<{
        response_head: ResponseHead;
        response_body: {
            message: 'Connected to SDBS at {SDBS_URI}';
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/base/ping_sdbs',
            errors: {
                503: `Connection error. Failed to connect to SDBS.`,
            },
        });
    }

    /**
     * Verifies that the connection to rabbitmq is open at AMQP_IMPORTER_URI, if not then it will return a connection-error response. This endpoint is intended for monitoring purposes, e.g GCP Monitoring (Uptime checks).
     * @returns any Connection to RabbitMQ is open.
     * @throws ApiError
     */
    public static pingRabbitmq(): CancelablePromise<{
        response_head: ResponseHead;
        response_body: {
            message: 'RabbitMQ server is alive at {AMQP_IMPORTER_URI}';
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/base/ping_rabbitmq',
            errors: {
                503: `Failed to verify connection to RabbitMQ`,
            },
        });
    }

}
