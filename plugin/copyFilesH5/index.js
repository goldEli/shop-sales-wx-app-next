import * as fs from "fs-extra";
import * as path from "path";

const copyFilesH5 = () => {
  return {
    name: "copy-file",
    writeBundle: async () => {
      console.log("taro代码打包完成！");

      const rootPath = path.resolve(__dirname, "../");
      const miniappPath = path.join(rootPath, "src");
      const outputPath = path.resolve(__dirname, "dist");
      const destPath = path.join(miniappPath, "taro");
      console.log("destPath", destPath);
      console.log("outputPath", outputPath);
      if (fs.existsSync(destPath)) {
        fs.removeSync(destPath);
      }
      fs.copySync(outputPath, destPath);

      console.log("代码拷贝完成！");
    }
  };
};

// module.exports = copyFilesH5
export default copyFilesH5;
