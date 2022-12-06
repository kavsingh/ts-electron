/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Error = {
    id: string;
    message: string;
    target: Error.target;
};

export namespace Error {

    export enum target {
        DEV = 'DEV',
        USER = 'USER',
    }


}

