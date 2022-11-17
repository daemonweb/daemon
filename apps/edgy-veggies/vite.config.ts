import nodeResolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const ssr = process.env.SSR

export default defineConfig({
  plugins: [solidPlugin({ssr: !!ssr})],
  server: {
    port: 3000,
  },
  build: 
    (ssr) ? {
      // SSR build
      target: 'esnext',
      minify: false,
      rollupOptions: {
        input: "src/entry-server.tsx",
        preserveEntrySignatures: false,
        output: [
          {
            dir: "dist/server",
            format: "cjs",
          }
        ],
        external: ["solid-js", "solid-js/web", "path", "express"],
        plugins: [
            nodeResolve({ preferBuiltins: true, exportConditions: ["solid", "node"] }),
            babel({
                babelHelpers: "bundled",
                presets: [["solid", { generate: "ssr", hydratable: true }]]
            }),
            common()
        ]
      }
    } : {
      // Client build
      target: 'esnext',
      minify: false,
      rollupOptions: {
        input: "src/entry-client.tsx",
        output: [
          {
            dir: "dist/client",
            format: "esm",
            entryFileNames: '[name].js',
          }
        ],
        preserveEntrySignatures: false,
        plugins: [
          nodeResolve({ exportConditions: ["solid"] }),
          babel({
            babelHelpers: "bundled",
            presets: [["solid", { generate: "dom", hydratable: true }]]
          }),
          common(),
        ]
      }
    }
});
