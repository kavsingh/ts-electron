/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownloadArtifactType } from './DownloadArtifactType';
import type { DownloadFile } from './DownloadFile';
import type { DownloadHardwarePlatform } from './DownloadHardwarePlatform';
import type { DownloadPlatform } from './DownloadPlatform';

export type DownloadArtifact = {
    info?: string;
    os_min?: string;
    os_max?: string;
    title: string;
    release_date: string;
    upid: string;
    platform: DownloadPlatform;
    hardware_platform?: DownloadHardwarePlatform;
    version: string;
    update_id: string;
    type: DownloadArtifactType;
    files?: Array<DownloadFile>;
};

