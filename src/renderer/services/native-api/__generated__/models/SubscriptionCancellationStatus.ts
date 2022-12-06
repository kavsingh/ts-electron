/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionCancellationStatus = {
    /**
     * Status of the subscription
     */
    status?: SubscriptionCancellationStatus.status;
    /**
     * Reason why the subscription is cancelled. This is defined by the reason codes in Chargebee Admin UI
     */
    cancellation_reason?: string;
    /**
     * Extra comment of the user about change of status
     */
    extra_comment?: string;
};

export namespace SubscriptionCancellationStatus {

    /**
     * Status of the subscription
     */
    export enum status {
        CANCELLED = 'cancelled',
    }


}

