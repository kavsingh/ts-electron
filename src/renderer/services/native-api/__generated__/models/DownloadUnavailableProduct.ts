/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DownloadUnavailableProduct = {
    upid?: string;
    message?: string;
    reason?: DownloadUnavailableProduct.reason;
};

export namespace DownloadUnavailableProduct {

    export enum reason {
        NONE = 'none',
        OS_INCOMPATIBLE = 'os_incompatible',
    }


}

