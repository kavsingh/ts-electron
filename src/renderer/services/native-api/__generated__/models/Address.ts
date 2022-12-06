/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';

export type Address = {
    country?: Country;
    phone?: string;
    city?: string;
    zip?: string;
    street?: string;
    type?: string;
};

