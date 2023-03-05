import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript2 from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import peerExternal from "rollup-plugin-peer-deps-external";
import nodeExternals from "rollup-plugin-node-externals";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "@buddy-ui/components",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["@mantine/core", "@mantine/hooks"],
    plugins: [
      peerExternal(),
      nodeExternals(),
      resolve(),
      commonjs(),
      typescript2({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "./dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
