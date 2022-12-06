/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownloadFileType } from './DownloadFileType';
import type { DownloadTargetDir } from './DownloadTargetDir';

export type DownloadFile = {
    target_file: string;
    target_dir: DownloadTargetDir;
    filesize: number;
    type: DownloadFileType;
    url: string;
};

