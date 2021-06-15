import { request } from "src/utils/request";
import URLS from "../urls";
import URLS_C from "../urls_c";
import { cons as CONSTANTS } from "src/utils/constants";

export default class Index {
  static getLevelInfo = function (id) {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.USER_LEVEL_INFO + id,
      {},
      "get"
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  static wechatAppLogin = function (code) {
    let resource = request(
      CONSTANTS.DOMAIN + "/site/mini/wechat/miniprogram/login",
      { code },
      "post"
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 用户信息
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getUserInfo = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.USER_INFO,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };
  static getUserAccount = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.USER_ACCOUNT,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };
  /**
   * 创建提现申请
   * @param apiData
   * @param method
   * @returns {null|PromiseLike<T>|Promise<T>}
   */
  static withdrawApply = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.WITHDRAW_APPLY,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : null;
      })
    );
  };

  /**
   * 创建提现申请
   * @param apiData
   * @param method
   * @returns {null|PromiseLike<T>|Promise<T>}
   */
  static withdrawApplyApplication = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services/" + `wxapi/payOrder/withdrawApply/create`,
      {},
      method
    );
    return (
      resource &&
      resource
        .then(function (data) {
          console.log(data, "data");
          return data ? data : null;
        })
        .catch((err) => {
          console.log(err, "err");
        })
    );
  };

  /**
   * 创建结算电子钱包申请
   * @param apiData
   * @param method
   * @returns {null|PromiseLike<T>|Promise<T>}
   */
  static settlementApplication = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN +
        "/services/" +
        `wxapi/payOrder/withdrawApply/createToBalance`,
      {},
      method
    );
    return (
      resource &&
      resource
        .then(function (data) {
          console.log(data, "data");
          return data ? data : null;
        })
        .catch((err) => {
          console.log(err, "err");
        })
    );
  };

  static getCardInfo = function ({ code, ...apiData }, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site/store-card/" + code,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data && data.result ? data.result : {};
      })
    );
  };

  static updateCardInfo = function (apiData = {}, method = "put") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site/store-card/updateOrCreate",
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : "";
      })
    );
  };

  static updateCardLikedInfo = function ({ id, ...apiData }, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site/content/like/" + id,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : {};
      })
    );
  };

  static updateHeadPic = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site/user/updateAvatar",
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data;
      })
    );
  };

  static convertHeadPic = function (avatar, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site/user/convertAvatar",
      {
        avatar,
      },
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        const d = data ? data || {} : {};
        return d.result || "";
      })
    );
  };

  /**
   * 分享图片1
   * @param apiData
   * @param method
   * @returns {*}
   */
  // static getShareImg1 = function (apiData = {}, method = 'get') {
  //     let resource = request(CONSTANTS.DOMAIN + '/site' + URLS.SHARE_IMG1, apiData, method);
  //     return resource && resource.then(function (data) {
  //         return data ? data || {} : {};
  //     });
  // };
  /**
   * 分享图片2
   * @param apiData
   * @param method
   * @returns {*}
   */
  // static getShareImg2 = function (apiData = {}, method = 'get') {
  //     let resource = request(CONSTANTS.DOMAIN + '/site' + URLS.SHARE_IMG2, apiData, method);
  //     return resource && resource.then(function (data) {
  //         return data ? data || {} : {};
  //     });
  // };

  /**
   * 用户提现
   * @param apiData
   * @param method
   * @returns {*}
   */
  static transferToBalance = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.TRANSFER_TO_BALANCE,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 获取分享二维码
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getSharePic = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.WECHAT_CODE_PIC,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 获取门店地址二维码
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getShopUrl = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.SHOP_URL_PIC,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 获取分享图片
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getShareImg = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.SHARE_IMG,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 获取商城图片
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getShopImg = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.SHOP_IMG,
      apiData,
      method,
      {}
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 提现列表
   * @param apiData
   * @param method
   * @returns {*}
   */
  static transferList = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.TRANSFER_LIST,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };
  static withdrawList = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.WITHDRAW_LIST,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : [];
      })
    );
  };
  /**
   * 提现申请列表
   * @param apiData
   * @param method
   * @returns {null|PromiseLike<T>|Promise<T>}
   */
  static withdrawApplyList = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.WITHDRAW_APPLY_LIST,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : [];
      })
    );
  };
  /**
   * 惠享达人列表
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getTopOrder = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.TOP_ORDER_USER,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || [] : [];
      })
    );
  };

  /**
   * 获取订单统计数据
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getOrderCount = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.ORDER_STATUS_COUNT,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 获取C端订单统计数据
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getOrderCount_c = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site" + URLS_C.ORDER_STATUS_COUNT,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return typeof data === "object" && data.result instanceof Object
          ? data.result
          : {};
      })
    );
  };

  /**
   * 获取售后订单统计数据
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getSupportInfo = function (distributorId, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + URLS.ORDER_SUPPORT_COUNT + "/" + distributorId,
      {},
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data && data.result ? data.result : 0;
      })
    );
  };

  /**
   * 获取粉丝统计数据
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getFunsCount = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.FUNS_STATUS_COUNT,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 分润列表（按单）
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getProfitsByOrder = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.PROFIT_BY_ORDER,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 分润列表（按人）
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getProfitsByUser = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.PROFIT_BY_USER,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 余额账单
   * @param apiData
   * @param method
   * @returns {*}
   */
  static moneyList = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.BLANCE_RECORDE,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 分销收益
   * @param apiData
   * @param method
   * @returns {*}
   */
  static salesMoneyList = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.SALES_BLANCE_RECORDE,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };
  /**
   * 全部收益
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getallProfitList = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.All_Profit_RECORDE,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  static blanceRecharge = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.PAY_RECHARGE,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  static getTabs = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.USER_TABS,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return Array.isArray(data) ? data || [] : [];
      })
    );
  };

  /**
   * 我的访客
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getVisitorList = function (apiData = {}, method = "put") {
    let resource = request(
      CONSTANTS.DOMAIN +
        "/site/mobile/campaign/visitor/list/" +
        apiData.limit +
        "/" +
        apiData.start +
        "/" +
        apiData.sort +
        "/" +
        apiData.order +
        "/complex",
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  static addVisitor = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site/mobile/campaign/visitor",
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };
  /**
   * 访客浏览记录
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getVisitRecord = function (queryParam = {}, apiData, method = "put") {
    let resource = request(
      CONSTANTS.DOMAIN +
        "/site/mobile/campaign/visitor/content/list/" +
        queryParam.limit +
        "/" +
        queryParam.start +
        "/" +
        queryParam.sort +
        "/" +
        queryParam.order +
        "/complex",
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };
  /**
   * 用户信息
   * @param apiData
   * @param method
   * @returns {*}
   */
  static atLeast = function (apiData = {}, method = "get") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.ATLEAST_MONEY,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || null : null;
      })
    );
  };

  /**
   * 获取商品分享二维码
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getSharePic_goods = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.GOODS_SHARE_PIC,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 获取邀请入驻分享二维码
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getSharePic_join = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.JOIN_SHARE_PIC,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : "";
      })
    );
  };

  /**
   * 获取赚钱分享二维码
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getSharePic_shop = function (apiData = {}, method = "post") {
    let resource = request(
      CONSTANTS.DOMAIN + "/services" + URLS.SHOP_SHARE_PIC,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : "";
      })
    );
  };

  /**
   * 刷新订单
   * @param apiData
   * @param method
   * @returns {*}
   */
  static refreshUserOrder_c = function (apiData = {}, method = "put") {
    let resource = request(
      CONSTANTS.DOMAIN + "/site" + URLS_C.REFRESH_USER_ORDER,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data || {} : {};
      })
    );
  };

  /**
   * 个人中心获取AI记录
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getAIRecord = function (
    queryParam = {},
    apiData = {},
    method = "post"
  ) {
    let resource = request(
      `${CONSTANTS.DOMAIN}/site${URLS.AI_RECORD}/${queryParam.limit}/${queryParam.start}/${queryParam.sort}/${queryParam.order}/complex`,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : "";
      })
    );
  };
  /**
   * 获取AI客户数量
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getAICustomerNum = function (apiData = {}, method = "post") {
    let resource = request(
      `${CONSTANTS.DOMAIN}/site/${URLS.AI_Customer_Num}`,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : "";
      })
    );
  };
  /**
   * 获取预约列表
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getAppontmentList = function (apiData = {}, method = "post") {
    let resource = request(
      `${CONSTANTS.DOMAIN}/services/${URLS.Appointment_List}`,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : "";
      })
    );
  };
  /**
   * 获取预约列表
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getAppontmentDetail = function (id, apiData = {}, method = "get") {
    let resource = request(
      `${CONSTANTS.DOMAIN}/services/wxapi/user/${id}/appointmentDetail`,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : "";
      })
    );
  };

  /**
   * /wxapi/distributor/update
   * @param apiData
   * @param method
   * @returns {*}
   */
  static updateDistributor = function (apiData = {}, method = "post") {
    let resource = request(
      `${CONSTANTS.DOMAIN}/services${URLS.UPDATE_DISTRIBUTOR}`,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : null;
      })
    );
  };

  /**
   * USER_BASE
   * @param apiData
   * @param method
   * @returns {*}
   */
  static getCuserInfo = function ({ id, ...apiData }, method = "get") {
    let resource = request(
      `${CONSTANTS.DOMAIN}/site${URLS_C.USER_BASE}/${id}`,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data && data.result ? data.result : null;
      })
    );
  };

  static updataCuserInfo = function ({ id, ...apiData }, method = "put") {
    let resource = request(
      `${CONSTANTS.DOMAIN}/site${URLS_C.USER_BASE}/${id}`,
      apiData,
      method
    );
    return (
      resource &&
      resource.then(function (data) {
        return data ? data : null;
      })
    );
  };
}
