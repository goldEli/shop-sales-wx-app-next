import Taro from "@tarojs/taro";
/**
 * 获取当前页url
 * @returns {*}
 */
export const getCurrentPageUrl = () => {
  let currentPage = getCurrentPage();
  let url = currentPage.route; //当前页面url
  return "/" + url;
};

/**
 * 获取当前页带参数的url
 * @returns {string}
 */
export const getCurrentPageUrlWithArgs = () => {
  let currentPage = getCurrentPage();
  let url = currentPage.route; //当前页面url
  let options = currentPage.options; //如果要获取url中所带的参数可以查看options
  //拼接url的参数
  let urlWithArgs = url + "?";
  for (let key in options) {
    let value = options[key];
    urlWithArgs += key + "=" + value + "&";
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);

  return urlWithArgs;
};

export const getUrlParam = (name) => {
  // 获取参数
  let url = window.location.search;
  // 正则筛选地址栏
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  // 匹配目标参数
  let result = url.substr(1).match(reg);
  //返回参数值
  return result ? decodeURIComponent(result[2]) : null;
};

export const getCurrentPage = () => {
  let pages = Taro.getCurrentPages(); //获取加载的页面
  let currentPage = pages[pages.length - 1]; //获取当前页面的对象
  return currentPage;
};

// module.exports = {
//   getUrlParam: getUrlParam,
//   getCurrentPage: getCurrentPage,
//   getCurrentPageUrl: getCurrentPageUrl,
//   getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs,
// };
