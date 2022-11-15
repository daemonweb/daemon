/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly CLOVER_APP_ID: string;
    readonly CLOVER_APP_SECRET: string;
    readonly PUBLIC_API_KEY: string;
    readonly PUBLIC_MERCHANT_ID: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}