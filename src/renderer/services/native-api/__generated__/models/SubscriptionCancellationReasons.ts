/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionCancellationReasons = Array<{
    /**
     * Cancellation reason code
     */
    reason_code?: string;
    /**
     * Complete display name of the cancellation reason code
     */
    display_name?: string;
    /**
     * Order in which these will be displayed
     */
    order_id?: number;
}>;
