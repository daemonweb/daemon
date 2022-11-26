import solid from "solid-start/vite";
import eslint from 'vite-plugin-eslint'
import { defineConfig } from "vite";
import dotenv from "dotenv";
import vercel from "solid-start-vercel";
import { resolve } from "path";

export default defineConfig(() => {
  dotenv.config();
  return {
    plugins: [eslint(), solid({ssr: true, adapter: vercel() })],
    ssr: {
      noExternal: ["@hope-ui/core", "@hope-ui/styles"],
    },
    resolve: {
      alias: [
        { find: '@clover-platform', replacement: resolve(__dirname, './.api/clover-platform') }
      ]
    },
    envDir: __dirname,
  };
});
