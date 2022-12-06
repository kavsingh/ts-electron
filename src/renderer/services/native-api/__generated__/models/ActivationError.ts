/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivationError = {
    id: string;
    target?: ActivationError.target;
    message?: string;
    args?: Array<{
        key: string;
        value: string;
    }>;
};

export namespace ActivationError {

    export enum target {
        DEV = 'DEV',
        USER = 'USER',
    }


}

