import scss from "rollup-plugin-scss";
import NodePath from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import multiInput from "rollup-plugin-multi-input";
// const copyFile = require("./plugin");

const resolveFile = (path) => NodePath.resolve(__dirname, path);
const externalPackages = [
  "react",
  "react-dom",
  "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react",
];

// const basicConfig = {
//   input: resolveFile("./src/pages/home/index.tsx"),
//   output: {
//     file: "dist/pages/home/index.js",
//     format: "esm",
//     sourcemap: true,
//   },
//   //   external: externalPackages,
//   plugins: [
//     RollupCommonjs({
//       include: /\/node_modules\//,
//     }),
//     RollupJson(),
//     // nodeResolve(),
//     scss(),
//     RollupTypescript({
//       tsconfig: resolveFile("./tsconfig.json"),
//       check: false,
//     }),
//   ],
// };

// const inputAndOutputs = [
//   {
//     input: resolveFile("./src/pages/home/index.tsx"),
//     output: {
//       file: "dist/pages/home/index.js",
//       format: "esm",
//       sourcemap: true,
//     },
//   },
//   {
//     input: resolveFile("./src/pages/index/index.tsx"),
//     output: {
//       file: "dist/pages/index/index.js",
//       format: "esm",
//       sourcemap: true,
//     },
//   },
// ];

export default {
  input: [
    resolveFile("./src/pages/home/index.tsx"),
    resolveFile("./src/pages/index/index.tsx"),
  ],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  //   external: externalPackages,
  plugins: [
    multiInput(),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    // nodeResolve(),
    scss(),
    RollupTypescript({
      tsconfig: resolveFile("./tsconfig.json"),
      check: false,
    }),
  ],
};
