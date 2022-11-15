/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppTracking = {
    /**
     * The uuid from the developer application.  This is typically populated and used only on the back end.
     */
    developerAppId?: string;
    /**
     * The name of the developer application.
     */
    applicationName?: string;
    /**
     * A string representing an application
     */
    applicationID?: string;
    /**
     * A string representing a semanticversion.  See http://semver.org/
     */
    applicationVersion?: string;
    /**
     * A string representing a SDK
     */
    sourceSDK?: string;
    /**
     * A string representing a semanticversion.  See http://semver.org/
     */
    sourceSDKVersion?: string;
};

