const fs = require("fs-extra");
const path = require("path");
const utils = require("../utils");

export default (ctx, options) => {
  ctx.onBuildFinish(() => {
    // Taro v3.1.4
    const blended = ctx.runOpts.blended || ctx.runOpts.options.blended;

    if (blended) {
      console.log("taro代码转编小程序代码完成！");

      utils.handleCopy();

      console.log("代码拷贝完成！");
      return;
    }
  });
};
