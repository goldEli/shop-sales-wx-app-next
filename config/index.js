const path = require("path");

const config = {
  projectName: "test",
  date: "2021-1-18",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [path.join(process.cwd(), "./plugin/copyFiles")],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  alias: {
    "src": path.resolve(__dirname, "../src"),
    "@/utils":
      process.env.NODE_ENV === "production"
        ? path.resolve(__dirname, "../utils")
        : path.resolve(__dirname, "../../miniapp/utils"),
    "@/components":
      process.env.NODE_ENV === "production"
        ? path.resolve(__dirname, "../components")
        : path.resolve(__dirname, "../../miniapp/components"),
  },
  mini: {
    enableSourceMap: false,
    addChunkPages(pages) {
      pages.set("subpackages/bar/index", ["subpackages/common"]),
        pages.set("subpackages/foo/index", ["subpackages/common"]);
    },
    webpackChain(chain) {
      chain.merge({
        externals: [
          (context, request, callback) => {
            const externalDirs = ["@/utils"];
            const externalDir = externalDirs.find((dir) =>
              request.startsWith(dir)
            );

            if (process.env.NODE_ENV === "production" && externalDir) {
              const externalDirPath = config.alias[externalDir];
              const res = request.replace(
                "@/utils",
                path.relative(context, externalDirPath)
              );

              return callback(null, `commonjs ${res}`);
            }

            callback();
          },
        ],
        optimization: {
          splitChunks: {
            cacheGroups: {
              react: {
                name: "vendors",
                test: (module) =>
                  /[\\/]node_modules[\\/](react-reconciler|scheduler)/.test(
                    module.resource
                  ),
              },
              subpackagesCommon: {
                name: "subpackages/common",
                minChunks: 2,
                test: (module, chunks) => {
                  const isNoOnlySubpackRequired = chunks.find(
                    (chunk) => !/\bsubpackages\b/.test(chunk.name)
                  );
                  return !isNoOnlySubpackRequired;
                },
                priority: 200,
              },
            },
          },
        },
      });
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // ????????????????????????
        },
      },
      cssModules: {
        enable: false, // ????????? false??????????????? css modules ?????????????????? true
        config: {
          namingPattern: "module", // ???????????????????????? global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    esnextModules: ["taro-ui"],
    publicPath: "/",
    staticDirectory: "static",
    addChunkPages(pages) {
      pages.set("subpackages/bar/index", ["subpackages/common"]),
        pages.set("subpackages/foo/index", ["subpackages/common"]);
    },
    webpackChain(chain) {
      chain.merge({
        externals: [
          (context, request, callback) => {
            const externalDirs = ["@/utils"];
            const externalDir = externalDirs.find((dir) =>
              request.startsWith(dir)
            );

            if (process.env.NODE_ENV === "production" && externalDir) {
              const externalDirPath = config.alias[externalDir];
              const res = request.replace(
                "@/utils",
                path.relative(context, externalDirPath)
              );

              return callback(null, `commonjs ${res}`);
            }

            callback();
          },
        ],
        optimization: {
          splitChunks: {
            cacheGroups: {
              react: {
                name: "vendors",
                test: (module) =>
                  /[\\/]node_modules[\\/](react-reconciler|scheduler)/.test(
                    module.resource
                  ),
              },
              subpackagesCommon: {
                name: "subpackages/common",
                minChunks: 2,
                test: (module, chunks) => {
                  const isNoOnlySubpackRequired = chunks.find(
                    (chunk) => !/\bsubpackages\b/.test(chunk.name)
                  );
                  return !isNoOnlySubpackRequired;
                },
                priority: 200,
              },
            },
          },
        },
      });
    },

    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // ????????? false??????????????? css modules ?????????????????? true
        config: {
          namingPattern: "module", // ???????????????????????? global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
