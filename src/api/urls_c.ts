export default class URLS_C {
  // b、c端商品详情
  static B_GOODS_DETAIL = "/mobile/commodity/goods";
  //C添加购物
  static ADD_CART_C = "/mobile/commodity/cart";
  //获取购物车数量
  static CART_COUNT_C = "/mobile/commodity/cart/lists";
  // 新推荐商品列表
  static NEW_SUS_PRO = "/mobile/spu/recommend/list";
  // 删除商品
  static DELETEBYIDS = "/mobile/commodity/cart/deleteByIds";
  // 更新购物车数量
  static UPDATE_CART_NUMBER = "/mobile/commodity/cart";
  // 地址列表
  static ADDRESS_LIST =
    "/mobile/commodity/user/address/list/5000/1/createTime/DESC/complex";
  // 创建顶顶那
  static CRREATE_ORDER = "/mobile/commodity/order/create";
  // 微信支付
  static WX_PAY = "/order/onLinePayWxApp";
  // 微信支付
  static WX_PAY_COUSTOM = "/mobile/custom/order/wechat/pay";
  // 订单数量统计
  static ORDER_STATUS_COUNT = "/mobile/commodity/order/orderStatistics";
  // 刷新订单数量统计
  static REFRESH_USER_ORDER = "/mobile/commodity/order/refresh/user";
  // 物流费用
  static LOGISTICS_CURRENTCOST = "/mobile/commodity/logistics/currentCost";
  // 获取用户信息
  static USER_BASE = "/user";
  //更新购物车sku
  static UPDATE_CART_SKU = "/mobile/commodity/cart/sku-change";
  //立即购买
  static CRREATE_ORDER_BUYNOW = "/mobile/commodity/order/buynow";
  //立即购买创建支付单
  static CRREATE_PAY_BUYNOW = "/commodity/order/pay";
  //立即购买创建定制品支付单
  static CRREATE_CUSTOM_PAY_BUYNOW = "/commodity/custom/order/pay";
  //sku详情
  static GOODS_SKU_DETAIL = "/mobile/sku/detail";
}
