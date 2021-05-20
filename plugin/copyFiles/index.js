import * as fs from "fs-extra";
import * as path from "path";

export default (ctx, options) => {
  ctx.onBuildFinish(() => {
    // Taro v3.1.4
    const blended = ctx.runOpts.blended || ctx.runOpts.options.blended;

    if (blended) {
      console.log("taro代码转编小程序代码完成！");

      const rootPath = path.resolve(__dirname, "../../../");
      const miniappPath = path.join(rootPath, "src");
      const outputPath = path.resolve(__dirname, "../../dist");
      const destPath = path.join(miniappPath, "taro");
      console.log("destPath", destPath);
      console.log("outputPath", outputPath);
      if (fs.existsSync(destPath)) {
        fs.removeSync(destPath);
      }
      fs.copySync(outputPath, destPath);

      console.log("代码拷贝完成！");
      return;
    }
  });
};
