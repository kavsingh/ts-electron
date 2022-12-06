/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownloadArtifact } from './DownloadArtifact';
import type { DownloadUnavailableProduct } from './DownloadUnavailableProduct';
import type { ResponseHead } from './ResponseHead';

export type DownloadProductsResponse = {
    response_head: ResponseHead;
    response_body: {
        artifacts?: Array<DownloadArtifact>;
        unavailable?: Array<DownloadUnavailableProduct>;
    };
};

