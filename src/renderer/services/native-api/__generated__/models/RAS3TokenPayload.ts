/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionInToken } from './SubscriptionInToken';

/**
 * JWT Payload
 */
export type RAS3TokenPayload = {
    /**
     * Time the token was issued.
     */
    iat?: number;
    /**
     * A RAS3 serial number.
     */
    serial?: string;
    /**
     * The user-id in UUID4 format.
     */
    'native-id'?: string;
    /**
     * A Base64 encoded JSON object describing the hardware the token is tied to (Note: this uses the normal Base64 encoding, not the JWT dialect of Base64).
     *
     */
    hardware_profile?: string;
    /**
     * Subject, always "activation".
     */
    sub?: string;
    /**
     * The expiration time after which the token becomes invalid.
     */
    exp?: number;
    subscription?: SubscriptionInToken;
};

