import solid from "solid-start/vite";
import { defineConfig } from "vite";
import dotenv from "dotenv";
import vercel from "solid-start-vercel";
import { resolve } from "path";

export default defineConfig(() => {
  dotenv.config();
  return {
    plugins: [solid({ssr: true, adapter: vercel() })],
    resolve: {
      alias: [
        { find: '@clover-platform', replacement: resolve(__dirname, './.api/clover-platform') }
      ]
    },
    envDir: __dirname,
  };
});
