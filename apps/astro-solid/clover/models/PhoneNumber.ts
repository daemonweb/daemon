/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type PhoneNumber = {
    id?: string;
    phoneNumber: string;
    /**
     * Customer who this phone number belongs to.
     */
    customer?: Reference;
};

