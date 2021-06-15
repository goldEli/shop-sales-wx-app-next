/* global window */
import _ from "lodash";
import Taro from "@tarojs/taro";
import {
  addSidForUrl,
  getOrderDistributorCode,
  getSalesDistributorType,
  getSiteKey,
  Toast,
} from "./func";
import $storage from "./storage";
import { cons as CONSTANTS, ENV } from "./constants";
import { base64_encode, getUrlRelativePath, jump } from "./index";
import { interceptorRejectCommon } from "./interceptors";
import ReqJSON from "../vendor/req-json/req-json.wx"

const reqJSON = new ReqJSON();
reqJSON.use(interceptorRejectCommon);

export const request = (
  url: string,
  data = {},
  method = "get",
  headers = {},
  noToken = false,
  loading = true
) => {
  if (loading) {
    Taro.showNavigationBarLoading({});
  }

  url = addSidForUrl(url);

  function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
      if (source[key]) {
        target[map[key]] = source[key];
      }
    });
  }

  let loginToken = $storage.get("login-token-data", null);
  let __headers = {};

  __headers["App-Version"] = CONSTANTS.APP_VERSION;

  if (!noToken && loginToken && loginToken.token) {
    __headers["X-Authorization"] = `Bearer ${loginToken.token}`;
    // console.log('请求数据:', url, __headers['X-Authorization']);
  }

  __headers["X-TENANT-CODE"] = ENV.APP_TENANT_CODE;

  let $salesDistributorType = getSalesDistributorType();
  let $siteKey = getSiteKey();
  let $distributorCode = getOrderDistributorCode(); // TODO 锁死状态时获取门店的方法需要变动
  if ($salesDistributorType) {
    __headers["Sales-Distributor-Type"] = $salesDistributorType;
  }
  let idx = getUrlRelativePath(url).indexOf("/services/", 0);
  if ($siteKey) {
    __headers["Site-Key"] = $siteKey;
  } else if (
    idx === -1 &&
    getUrlRelativePath(url).indexOf("site/user/updateAvatar") === -1 &&
    getUrlRelativePath(url).indexOf("site/user/convertAvatar") === -1 &&
    getUrlRelativePath(url).indexOf("/site/url-params") === -1
  ) {
    Taro.clearStorageSync();
    // Toast('站点信息丢失，请重新登录！');
    setTimeout(() => {
      jump("pages/guide/index");
    }, 1250);
    return null;
  }
  if ($distributorCode) {
    __headers["Store-Code"] = base64_encode($distributorCode);
  }
  let _index = getUrlRelativePath(url).indexOf("/pay/", 0);
  if (_index !== -1) {
    let _user = $storage.get("login-user-data", {});
    __headers["Merchant-Key"] = _user.userInfo
      ? _user.userInfo.merchantKey
      : null;
  }
  headers = Object.assign(__headers, headers);

  try {
    return reqJSON
      .resource(url, {
        headers,
      })
      [method](data)
      .catch((e) => {
        console.log(e, "xxx");
        Toast(e);
        if (typeof e == "string") {
          Toast(e);
        } else {
          Toast("【request】" + JSON.stringify(e));
        }
        Taro.hideNavigationBarLoading({});
        return null;
      });
  } catch (err) {
    console.log(err);
  }

  return null;
};
