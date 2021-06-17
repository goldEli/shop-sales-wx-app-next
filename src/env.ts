import Taro from "@tarojs/taro";

let extConfigObj = Taro.getExtConfigSync();
const config = Object.keys(extConfigObj).length !== 0 ? extConfigObj : {};

export default config;
