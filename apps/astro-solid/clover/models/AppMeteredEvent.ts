/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppMetered } from './AppMetered';
import type { Reference } from './Reference';

export type AppMeteredEvent = {
    id?: string;
    appMetered: AppMetered;
    count: number;
    createdTime?: number;
    modifiedTime?: number;
    charge?: Reference;
};

