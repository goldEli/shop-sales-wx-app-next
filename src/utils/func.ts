// import Toast from '../vendor/vant-weapp/toast/toast'
// import {each, jump} from './util'
import $storage from "./storage";
import Authentication from "src/api/resource/authentication";
import Ucenter from "../api/resource/ucenter";
import Taro from "@tarojs/taro";
import { onEach } from "./index";
// global.regeneratorRuntime = require("../vendor/regenerator/runtime");
// const { regeneratorRuntime } = global;

export const Toast = (msg: string) => {
  Taro.showToast({
    title: msg,
    icon: "none",
    duration: 3000,
  });
};

export const dealImg = (qrImgUrl) => {
  console.log("分享的图片：", qrImgUrl);

  Taro.downloadFile({
    url: qrImgUrl,
    success: function (res) {
      if (res.statusCode === 200) {
        // console.log('图片下载成功' + res.tempFilePath)
        Taro.hideLoading();
        Taro.previewImage({
          current: res.tempFilePath,
          urls: [res.tempFilePath],
        });
      } else {
        const msg = "响应失败" + res.statusCode;
        Toast(msg);
        Taro.hideLoading();
      }
    },
  });
};

export const getShareParams = () => {
  let userInfo = $storage.get("login-user-data", {}),
    _user = userInfo.userInfo || {},
    params: {
      _storeCode?: string;
      _userId?: string;
      _invitationCode?: string;
      isShare?: boolean;
    } = {},
    storeCode = getInvitationDistributorCode();
  if (storeCode) {
    params._storeCode = storeCode;
  }
  if (userInfo.id) {
    params._userId = userInfo.id;
  }
  // 之前的逻辑是：只有B才带上邀请码.现在不论b,c都可以
  if (_user.myOwnInvitationCode) {
    params._invitationCode = _user.myOwnInvitationCode;
  }
  params.isShare = true;
  return params;
};

export const getInvitationDistributorCode = () => {
  let userInfo = $storage.get("login-user-data", {}),
    _user = userInfo.userInfo || {};
  // 邀请和转发时取的是 "我默认到达的门店编码"
  // c: 我最近的一个B的门店--没有则是旗舰店
  // b: 我自己的门店
  return _user.arrivedDistributorCode;
};

/**
 * 暂时与getDsitributiorCode的方法逻辑一样(下单逻辑不变)，后期锁死和不锁死两种情况逻辑再变化。
 */
export const getOrderDistributorCode = () => {
  let commonInfo = getCommonInfo(),
    userInfo = $storage.get("login-user-data", {}),
    _user = userInfo.userInfo || {},
    userType = getLocalType();

  if (userType == "b") {
    return _user.myOwnDistributorCode || "";
  } else {
    // 访问路由时如果url参数带有_userId会更新此值。
    let _storeCode = $storage.get("cache-url-store-code", null);
    if (_storeCode) {
      return _storeCode;
    }

    if (_user && _user.arrivedDistributorCode) {
      return _user.arrivedDistributorCode;
    }

    if (commonInfo.tenantDistributorCode) {
      return commonInfo.tenantDistributorCode;
    }

    return _user.flagDistributorCode || "";
  }
};

/**
 * 获取门店信息
 * @returns {*|string}
 */
export const getDistributorCode = () => {
  // 如果没有url参数则取直营店
  let commonInfo = getCommonInfo(),
    userInfo = $storage.get("login-user-data", {}),
    _user = userInfo.userInfo || {},
    userType = getLocalType();

  if (userType == "b") {
    return _user.myOwnDistributorCode || "";
  } else {
    // 访问路由时如果url参数带有_userId会更新此值。
    let _storeCode = $storage.get("cache-url-store-code", null);
    if (_storeCode) {
      return _storeCode;
    }

    if (commonInfo.tenantDistributorCode) {
      return commonInfo.tenantDistributorCode;
    }

    return _user.flagDistributorCode || "";
  }
};
export const getLocalType = () => {
  let commonInfo = getCommonInfo(),
    type = "c",
    roleB = "ROLE_TENANT_B",
    roleC = "ROLE_TENANT_C",
    $user = $storage.get("login-user-data", {}),
    userInfo = $user.userInfo || {},
    isRead = commonInfo.hasStoreNoticeRead;

  if ($user.id) {
    const roles = $user.roles || [];
    roles.some((roleItem) => {
      if (roleItem.name == roleB) {
        type = "b";
        return true;
      } else if (roleItem.name == roleC) {
        type = "c";
      }
    });
    isRead = userInfo.isRead;
  }

  /**
   *
  if (isRead !== true && type) {
    // 如果没有用户点击"进入我的店铺" 确认，即使是通过了B端的审核-也显示C的信息
    type = 'c';
  }
   */

  return type;
};
export const getSiteKey = () => {
  let commonInfo = getCommonInfo(),
    userInfo = $storage.get("login-user-data", {}),
    _user = userInfo.userInfo || {},
    urlSiteKey = $storage.get("cache-url-site-key", null),
    siteKeyC = commonInfo.tenantSiteKey,
    siteKeyB = _user.tenantShopSiteKey || "";

  if (urlSiteKey) {
    return urlSiteKey;
  }
  if (siteKeyB.trim()) {
    return siteKeyB.trim();
  }
  if (siteKeyC) {
    return siteKeyC;
  }
  return "";
};
export const getCommonInfo = () => {
  return $storage.get("cache-common-info-by-code", {});
};
export const getSalesDistributorType = () => {
  let userInfo = $storage.get("login-user-data", {}),
    _user = userInfo.userInfo || {},
    userType = getLocalType();
  if (userType === "c") {
    return "ROLE_TENANT_C";
  }
  return _user.myOwnSalesDistributorType || "ROLE_TENANT_C";
};

export const lwjUserInfo = async () => {
  let userInfo = await $storage.get("login-user-data", {});
  return userInfo || {};
};

export const getWxCode = async (obj = {}) => {
  const data = (await getWxApi("login", obj)) as any;
  let code = data.code || "";
  if (!code) {
    Toast(data.errMsg);
    return "";
  }
  return code;
};

export const getWxSetting = async (obj = {}) => {
  const data = (await getWxApi("getSetting", obj)) as any;
  return data.authSetting || {};
};

export const getWxUserInfo = async (obj = {}, isJump = true) => {
  if ($storage.get("hasUserInfo", null) !== true) {
    if (isJump) {
      // wx.clearStorageSync();
      // jump('pages/guide/index');
      return {};
    }
    return false;
  }
  const data =
    $storage.get("userInfo", {}) || $storage.get("login-user-data", {});
  return data || {};
};

export const getWxApi = (api, obj) => {
  const runGetWxApi = function () {
    return new Promise(function (resolve, reject) {
      let _Obj = Object.assign(obj, {
        success: async function (res) {
          resolve(res);
        },
        fail: function (res) {
          console.log("runGetWxApi-fail", res);
          reject(res);
        },
      });
      Taro[api](_Obj);
    });
  };
  return Promise.all([runGetWxApi()])
    .then(async function (results) {
      return results[0] || {};
    })
    .catch((reason) => {
      console.log(reason);
      Toast(reason.errMsg || "获取微信API[" + api + "]失败，请联系管理员！");
      return "";
    });
};

export const serverErrorMessage = (response) => {
  if (typeof response == "string") {
    return response;
  }

  if (response && response.fieldErrors && response.fieldErrors.length) {
    let serverErrorMessages = [];
    let msg = "";
    onEach(response.fieldErrors, (item) => {
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
    let __serverErrorMessages = [],
      msg = "";

    onEach(response.messages, function (item) {
      if (item && item.$srvmessage) {
        __serverErrorMessages.push(item.$srvmessage);
      }
    });

    msg = __serverErrorMessages ? __serverErrorMessages.join("") : "";
    return msg || JSON.stringify(response);
  }
  return JSON.stringify(response);
};
export const serverErrorAlert = (response) => {
  let msg = serverErrorMessage(response);
  Toast(msg);
};
export const deepClone = (source) => JSON.parse(JSON.stringify(source));

export const addSidForUrl = (url) => {
  let sid = $storage.get("UMS-COOKIE-SID");
  if (sid && url.indexOf(";sid=") === -1 && url.indexOf("services/") !== -1) {
    let pathArr = url.split("?");
    url =
      pathArr[0] + ";sid=" + sid + (pathArr[1] ? "?" + sid + pathArr[1] : "");
  }
  return url;
};

// const goBanner = (obj = {}) => {
//   let url = obj.url;
//   let disabled = obj.disabled;
//   let title = obj.title;
//   let img = obj.img;
//   if (disabled === 1 || !url || url === "javascript:") {
//     return false;
//   }
//   let tabPages = getApp().globalData.tabPages;
//   let regexp = /(\/pages\/)S*/;
//   let res = url.match(regexp);
//   let _path = res
//     ? url
//     : "/pages/index/banner/index?url=" +
//       encodeURIComponent(url) +
//       (title ? "&title=" + encodeURIComponent(title) : "") +
//       (img ? "&img=" + encodeURIComponent(img) : "");
//   let _page = _path.split("?");
//   let _type = tabPages.indexOf(_page[0]) > -1 ? "switchTab" : "navigateTo";
//   console.log(obj, "oooooo", _type, tabPages, _path);

//   wx[_type]({
//     url: _path,
//     fail: (e) => {
//       wx.switchTab({
//         url: "pages/index/index",
//       });
//     },
//   });
// };

export const getWxChooseImage = async (obj = {}) => {
  const data = (await getWxApi("chooseImage", obj)) as any;
  let tempFilePaths = data.tempFilePaths || "";
  if (!tempFilePaths) {
    Toast(data.errMsg);
    return "";
  }
  return tempFilePaths;
};
export const getWxUploadFile = async (obj = {}) => {
  const res = (await getWxApi("uploadFile", obj)) as any;
  let data = res.data || "";
  if (!data) {
    Toast(res.errMsg);
    return "";
  }
  return data;
};

export const getIsLoginNow = async () => {
  let hasUserInfo = $storage.get("hasUserInfo", null),
    $user = await lwjUserInfo(),
    userType = getLocalType();
  if (userType == "b") {
    // b端的东西保持不变！
    return true;
  }
  console.log(hasUserInfo);
  if ($user.id && hasUserInfo) {
    return true;
  }
  return false;
};

export const lwjPayInfo = async () => {
  const data = await Authentication.getPayInfo();
  return data;
};

export const payCheckBindMobile = async () => {
  let auth = $storage.get("cache-lwj-pay-info", {});
  if (auth.payWay == "ALLINPAY" && auth.isBindMobile) {
    return true;
  }
  auth = await Authentication.getPayInfo();
  if (!auth.payWay) {
    return false;
  }
  if (auth.payWay == "ALLINPAY" && !auth.isBindMobile) {
    Taro.navigateTo({
      url:
        "/pages/user/authentication/checkPhone/index?type=2&mobile=" +
        auth.mobile,
    });
    return false;
  }
  $storage.set("cache-lwj-pay-info", auth, { exp: 999999999 });
  return true;
};

export const getUserFansCount = async ($noCache) => {
  let noCache = $noCache || false;
  const cacheUserFansCount = $storage.get("cache-user-fans-count", null);
  if (cacheUserFansCount && !noCache) {
    return cacheUserFansCount;
  } else {
    let val = await Ucenter.getFunsCount();
    if (val.hasOwnProperty("totalCount")) {
      $storage.set("cache-user-fans-count", val, { exp: 999999999 });
    }
    return val;
  }
};
