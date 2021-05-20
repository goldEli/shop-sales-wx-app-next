const fs = require("fs-extra");
const path = require("path");
const utils = require("../utils");

const copyFilesH5 = (options = {}) => {
  const { hook = "buildEnd" } = options;
  return {
    name: "copy-file",
    [hook]: async () => {
      console.log("taro代码打包完成！");
      utils.handleCopy();

      console.log("代码拷贝完成！");
    },
  };
};

// module.exports = copyFilesH5
export default copyFilesH5;
