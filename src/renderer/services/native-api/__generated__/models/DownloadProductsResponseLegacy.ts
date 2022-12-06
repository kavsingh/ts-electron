/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownloadArtifact } from './DownloadArtifact';
import type { ResponseHead } from './ResponseHead';

export type DownloadProductsResponseLegacy = {
    response_head: ResponseHead;
    response_body: {
        artifacts?: Array<DownloadArtifact>;
    };
};

