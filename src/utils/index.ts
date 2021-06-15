import Taro from "@tarojs/taro";
import { getCurrentPage } from "./util-url";

export const onEach = (collection, handler) => {
  return (
    collection &&
    (Array.isArray(collection)
      ? collection.forEach(handler)
      : Object.keys(collection).forEach(function (key) {
          return handler(collection[key], key);
        }))
  );
};

export function mockRequest(params) {
  return new Promise((resolve) => {
    Taro.request(params).then((data) => {
      resolve(data.data);
    });
  });
}

export function goBanner(obj: any = {}) {
  let url = obj.url;
  let disabled = obj.disabled_url;
  let title = obj.ad_name;
  let img = obj.info;
  if (
    disabled === 1 ||
    !url ||
    url === "javascript:" ||
    url.indexOf("plugin-private") > -1 ||
    url.indexOf("mp.weixin.qq.com") > -1
  ) {
    return false;
  }
  let regexp = /(\/pages\/)S*/;
  let res = url.match(regexp);
  if (res) {
    Taro.navigateTo({
      url: `${url}`,
    });
    return true;
  } else {
    Taro.navigateTo({
      url:
        "/pages/index/banner/index?url=" +
        encodeURIComponent(url) +
        (title ? "&title=" + encodeURIComponent(title) : "") +
        (img ? "&img=" + encodeURIComponent(img) : ""),
    });
    return true;
  }
}

export const defaultCoverPath =
  "https://static.liweijia.com/sales/wx_app/assets/images/cate_error.png";
export const noImageCover =
  "https://static.liweijia.com/site-php/upload/commodity-goods/f7ac86b70becc7586a10e10ae09fd875.jpg";

export function transferPrice(price = 0, n = 2) {
  return Number(price).toFixed(n);
}

export function priceRange(price1: any = 0, price2: any = 0) {
  var _range =
    parseInt((price1 * 10 * 10).toString()) -
    parseInt((price2 * 10 * 10).toString()) / 100;
  return _range.toFixed(2) || 0.0;
}

export function __getStorage(key: string): any {
  try {
    var value = Taro.getStorageSync(key);
    return value;
  } catch (e) {
    console.log(e, `获取${key}缓存失败`);
  }
  return "";
}

export function __setStorage(key: string, value: any) {
  try {
    Taro.setStorageSync(key, value);
  } catch (e) {
    console.log(e, `保存${key}缓存失败`);
  }
}

export function compose(...funcs) {
  return function (...args) {
    funcs.forEach((func, index) => {
      if (func) {
        func(args[index]);
      }
    });
  };
}

// 异步获取数据，包含loading
export const getAsyncData = async (func) =>
  compose(
    Taro.showLoading({ title: "加载中", mask: true }),
    await func(),
    Taro.hideLoading()
  );

const each = (collection, handler) => {
  return (
    collection &&
    (Array.isArray(collection)
      ? collection.forEach(handler)
      : Object.keys(collection).forEach(function (key) {
          return handler(collection[key], key);
        }))
  );
};

export const serverErrorMessage = (response) => {
  if (typeof response == "string") {
    return response;
  }

  if (response && response.fieldErrors && response.fieldErrors.length) {
    let serverErrorMessages: any = [];
    let msg = "";
    each(response.fieldErrors, (item) => {
      if (item && item.defaultMessage) {
        serverErrorMessages.push(item.defaultMessage);
      }
    });
    msg = serverErrorMessages ? serverErrorMessages.join("") : "";
    return msg || JSON.stringify(response);
  }

  if (
    typeof response == "object" &&
    response.hasOwnProperty("serverInternal")
  ) {
    return response.serverInternal.$srvmessage || JSON.stringify(response);
  }
  if (typeof response == "object" && response.hasOwnProperty("message")) {
    return response.message || JSON.stringify(response);
  }
  if (typeof response == "object" && response.hasOwnProperty("msg")) {
    return response.msg || JSON.stringify(response);
  }

  if (
    response &&
    response.messages &&
    response.messages.serverInternal &&
    typeof response.messages.serverInternal.$srvmessage == "string"
  ) {
    return (
      response.messages.serverInternal.$srvmessage || JSON.stringify(response)
    );
  }
  if (typeof response == "object" && response.messages) {
    let __serverErrorMessages: any[] = [],
      msg = "";

    each(response.messages, function (item) {
      if (item && item.$srvmessage) {
        __serverErrorMessages.push(item.$srvmessage);
      }
    });

    msg = __serverErrorMessages ? __serverErrorMessages.join("") : "";
    return msg || JSON.stringify(response);
  }
  return JSON.stringify(response);
};

export const touchCapable = () => {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return true;
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
};

// make throttle
export const throttle = (func, wait) => {
  var previous = Date.now();
  console.log(previous, "previous???????????????");
  return function () {
    var now = Date.now();
    console.log(now, "now apply", now - previous);
    if (now - previous > wait) {
      console.log("apply");
      func.apply(this, arguments);
      previous = now;
    }
  };
};

export const debounce = (fn, time) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    if (!timer) {
      fn.apply(this, arguments);
    }
    timer = setTimeout(() => {
      timer = null;
    }, time);
  };
};

export const getUrlRelativePath = (url) => {
  var arrUrl = url.split("//");
  var start = arrUrl[1].indexOf("/");
  var relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符
  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }
  return relUrl || "";
};

export const jump = (to) => {
  let currentPage = getCurrentPage(),
    urlParam = [],
    gData = Taro.getApp().globalData,
    tabPages = gData.tabPages,
    jumpStatus = gData.jumpStatus;

  if (jumpStatus === true) {
    return;
  }

  urlParam.push("_returnUrl=" + encodeURIComponent("/" + currentPage.route));
  each(currentPage.options, (val, key) => {
    urlParam.push(`${key}=${encodeURIComponent(val)}`);
  });
  if (currentPage.route == to) {
    // 如果是本页面-就不跳转了
    return;
  }

  let url = `/${to}` + (urlParam.length ? "?" + urlParam.join("&") : "");
  console.log("jump:" + url);

  Taro.getApp().globalData.jumpStatus = true;

  if (tabPages.indexOf(`/${currentPage.route}`) !== -1) {
    Taro.reLaunch({ url });
  } else {
    Taro.redirectTo({ url });
  }
};

export function base64_encode(str) {
  // 编码，配合encodeURIComponent使用
  var c1, c2, c3;
  var base64EncodeChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var i = 0,
    len = str.length,
    strin = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      strin += base64EncodeChars.charAt(c1 >> 2);
      strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
      strin += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      strin += base64EncodeChars.charAt(c1 >> 2);
      strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
      strin += base64EncodeChars.charAt((c2 & 0xf) << 2);
      strin += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    strin += base64EncodeChars.charAt(c1 >> 2);
    strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
    strin += base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
    strin += base64EncodeChars.charAt(c3 & 0x3f);
  }
  return strin;
}
