const fs = require("fs-extra");
const path = require("path");
function handleCopy() {
  const rootPath = path.resolve(__dirname, "../..");
  const miniappPath = path.join(rootPath, "src");
  const outputPath = path.resolve(__dirname, "../dist");
  const destPath = path.join(miniappPath, "taro");

  if (fs.existsSync(destPath)) {
    fs.removeSync(destPath);
  }
  fs.copySync(outputPath, destPath);
}

module.exports = {
  handleCopy,
};
