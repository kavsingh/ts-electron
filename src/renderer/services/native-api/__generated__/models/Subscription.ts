/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscribedLicensedProduct } from './SubscribedLicensedProduct';
import type { SubscribedProduct } from './SubscribedProduct';

export type Subscription = {
    /**
     * Subscription ID
     */
    subscription_id: number;
    /**
     * Subscription ID of external subscription provider
     */
    external_subscription_id: string;
    /**
     * Subscription status
     */
    status: Subscription.status;
    /**
     * Date of subscription creation
     */
    created_at: string;
    /**
     * Date of last subscription update
     */
    updated_at: string;
    /**
     * Date of subscription cycle start
     */
    started_at: string;
    /**
     * Date of subscription cycle end
     */
    end_at: string;
    /**
     * Seconds to subscription expiration
     */
    expires_in: number;
    /**
     * Date when subscription will be cancelled, optional.
     */
    cancellation_scheduled_at?: string;
    product: SubscribedProduct;
    licensed_product?: SubscribedLicensedProduct;
};

export namespace Subscription {

    /**
     * Subscription status
     */
    export enum status {
        TRIAL = 'trial',
        ACTIVE = 'active',
        CANCELLED = 'cancelled',
        PAUSED = 'paused',
    }


}

