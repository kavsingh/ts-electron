/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionStatus = {
    /**
     * Status of the subscription
     */
    status?: SubscriptionStatus.status;
};

export namespace SubscriptionStatus {

    /**
     * Status of the subscription
     */
    export enum status {
        ACTIVE = 'active',
        PAUSED = 'paused',
    }


}

