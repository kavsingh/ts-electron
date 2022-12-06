/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Subscription details if activation token was created for subscribable product.
 */
export type SubscriptionInToken = {
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
    status: SubscriptionInToken.status;
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
    /**
     * Seconds added in subscription end_at and used in expiration calculations, optional.
     */
    grace_period?: number;
};

export namespace SubscriptionInToken {

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

