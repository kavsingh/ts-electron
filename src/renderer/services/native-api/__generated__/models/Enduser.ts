/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Country } from './Country';
import type { Language } from './Language';
import type { ResponseHead } from './ResponseHead';

export type Enduser = {
    response_head: ResponseHead;
    response_body: {
        native_id: string;
        email: string;
        first_name: string;
        last_name: string;
        /**
         * SDBS-specific id, not to be used in new systems
         * @deprecated
         */
        sdbs_id?: number;
        language: Language;
        country: Country;
        created_at?: string;
        updated_at?: string;
        locked?: boolean;
        /**
         * Source for user registration. Formerly "Origin"
         */
        creation_source?: string;
        addresses?: Array<Address>;
    };
};

