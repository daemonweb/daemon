/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type EmailAddress = {
    id?: string;
    emailAddress: string;
    verifiedTime?: number;
    primaryEmail?: boolean;
    /**
     * Customer who this email address belongs to.
     */
    customer?: Reference;
};

