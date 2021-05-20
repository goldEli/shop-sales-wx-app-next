import scss from "rollup-plugin-scss";
import NodePath from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import multiInput from "rollup-plugin-multi-input";
import copyFilesH5 from "./plugin/copyFilesH5/index";
// const mv = require("./plugin-mv-h5");

const resolveFile = path => NodePath.resolve(__dirname, path);
const externalPackages = [
  "react",
  "react-dom",
  "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react"
];

export default {
  input: [
    resolveFile("./src/pages/home/index.tsx"),
    resolveFile("./src/pages/home/index.config.ts"),
    resolveFile("./src/pages/index/index.tsx"),
    resolveFile("./src/pages/index/index.config.ts")
  ],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true
  },
  //   external: externalPackages,
  plugins: [
    multiInput(),

    scss({
      output: "dist/bundle.css"
    }),
    // RollupCommonjs({
    //   include: /\/node_modules\//,
    // }),
    RollupJson(),
    // nodeResolve(),
    RollupTypescript({
      tsconfig: resolveFile("./tsconfig.json"),
      check: false
    }),
    copyFilesH5()
  ]
};
