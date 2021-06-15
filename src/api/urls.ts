export default class URLS {
  static TEST = "/";
  // 商品类型
  static GOODS_PRODUCTTYPE_LIST = "services/wxapi/goods/productType/list";
  // 当前登录用户信息
  static USER_INFO = "/wxapi/user/getInfo";
  // 当前分享图片
  // static SHARE_IMG1 = '/mobile/commodity-share-1034640.png';
  // static SHARE_IMG2 = '/mobile/commodity-share2-1034640.png';
  // 等级信息
  static USER_LEVEL_INFO = "/wxapi/user/level/detail/";
  // 分润列表（按单）
  static PROFIT_BY_ORDER = "/wxapi/user/getProfitsByOrder";
  // 分润列表（按人）
  static PROFIT_BY_USER = "/wxapi/user/getProfitsByUser";
  // 惠享达人
  static TOP_ORDER_USER = "/wxapi/user/getTopOrder";
  // 商品
  static GOODS = "/site/mobile/commodity";
  // 商品详情
  static GOODS_DETAIL = "/wxapi/goods/spu/detail";
  // 预估最高佣金
  static MAX_PROFITS = "/wxapi/goods/max-profits";
  // 订单
  static ORDER = "/services/wxapi/payOrder";
  // C端订单
  static C_ORDER = "/site/mobile/commodity/order";
  //C升B以前C端订单接口
  static C_ORDER_SEARCH = "/site/mobile/commodity/order/collection";
  // C端预约
  static C_APPOINTMENT = "/site/order/appointment";
  //金币列表
  static COINS = "/services/wxapi/user/coin/record";
  //金币列表
  static INVITED_DISTRIBUTORS = "/services/wxapi/user/invitedDistributors";
  //获取购物车数量
  static CART_COUNT = "/services/wxapi/shopCart/count";
  //购物车列表
  static CART_LIST = "/services/wxapi/shopCart/detail";
  static CART_SUMMARY = "/services/wxapi/shopCart/summary";
  //更新购物车数量
  static UPDATE_CART_NUMBER = "/services/wxapi/shopCart/updatenumber";
  //删除购物车商品
  static DELATE_CART_PRODUCT = "/services/wxapi/shopCart/delete";
  //添加购物
  static ADD_CART = "/services/wxapi/shopCart/create";
  //添加购物
  static CART_BASE = "/services/wxapi/shopCart";
  //购物车支付商品信息
  static CART_PAY_PRODUCT = "/services/wxapi/shopCart/settlement";
  static CART_PAY_PAYORDER = "/services/wxapi/payOrder";
  //立即购买时购物车支付商品信息
  static CART_PAY_PRODUCT_BUYNOW =
    "/services/wxapi/shopCart/settlement/payAtOnce";
  //账户余额
  static ACCOUNT_BALANCE = "/services/wxapi/payOrder/available/balance";
  //订单创建
  static ORDER_CREATE = "/services/wxapi/payOrder/create";
  //支付单创建
  static PAY_CREATE = "/services/wxapi/payOrder/pay";
  //根据交易流水号获取订单号
  static GET_ORDER_ID = "/services/wxapi/payOrder/detailByJL";
  //微信支付
  static WX_PAY = "/services/wxapi/payOrder/wechat/pay";
  //账户余额支付
  static ACCOUNT_PAY = "/services/wxapi/payOrder/balance/pay";
  // 获取已有定制品列表
  static COUSTOMBASE = "/services/wxapi/coustomGoods/stuff";
  // 添加定制品单项到列表
  static ADDCOUSTOMITEM = "/services/wxapi/coustomGoods/stuff/add";
  // 获取订制品清单数量
  static GETITEMNUMS = "/services/wxapi/coustomGoods/stuff/count";
  // 更新定制品单项到列表
  static UPDATECOUSTOMITEM = "/services/wxapi/coustomGoods/stuff/update";
  // 定制品模板类型列表
  static GETTEMPLATELIST = "/services/wxapi/coustomGoods/template/list";
  // 获取详情页基本数据
  static GETTEMPLATELISTDETAIL =
    "/services/wxapi/coustomGoods/template/item/list";
  //
  static FILE_DOWNLOAD = "/fileDownload";
  // 入驻申请
  static JOIN_REGISTER = "/wxapi/distributorRegistry/register";
  // 提现
  static TRANSFER_TO_BALANCE = "/wxapi/payOrder/transferToBalance";
  // 提现列表
  static TRANSFER_LIST = "/wxapi/payOrder/transfer/list";
  // 当前门店二维码
  static WECHAT_CODE_PIC = "/wxapi/user/getWxaCodePic";
  // 推荐商品列表
  static SUS_PRO = "/services/wxapi/goods/spu/recommend/list";
  // 当前门店二维码
  static SHOP_URL_PIC = "/wxapi/user/getDistributorUrl";
  // 分享图片
  static SHARE_IMG = "/wxapi/user/getDistributorShareUrl";
  // 商城图片
  static SHOP_IMG = "/wxapi/user/getDistributorShopUrl";
  // 余额流水
  static BLANCE_RECORDE = "/wxapi/payOrder/balance/record";
  // 全部收益
  static All_Profit_RECORDE = "/wxapi/user/getProfitsRecordAll";
  // 分销流水
  static SALES_BLANCE_RECORDE = "/wxapi/user/sales/profits/list";
  // 余额充值
  static PAY_RECHARGE = "/wxapi/payOrder/wechat/pay/recharge";

  // 获取tabs
  static USER_TABS = "/wxapi/user/tabs/mine";
  //获取门店的trial
  static STORE_TRIAL = "/mzdiy/store/bycode";
  //获取试用期
  static APPLY_TRAIL = "/mzdiy/store/design/applyTrial";
  // 获取房间类型列表
  static ROOM_LIST = "/mobile/mzdiy/house/room/getAll";
  // 提交AI设计
  static SUBMIT_AI = "/mzdiy/doDesign";
  // 上传户型图
  static UPLOAD_HUXINGTU = "/mzdiy/house";
  // 户型列表
  static HUXINGTU_LIST = "/mobile/mzdiy/house/list";
  // 风格列表
  static FENGGE_LIST = "/mzdiy/style/list/30/1/created_at/DESC/complex";
  // 房间名称
  static ROOM_TYPE = "/mzdiy/roomsName";
  //过滤商品ID
  static FILTER_GOODSID = "/mzdiy/filter/goods";
  // 是否支付
  static HAS_PAY = "/mzdiy/store/design/open";
  // 建筑面积列表
  static AREA_LIST = "/mobile/mzdiy/house/builtArea/getAll";
  // 小区搜索
  static PARK_SEARCH = "/mzdiy/remote/house/community/search";
  // 获取tabs
//   static USER_TABS = "/wxapi/user/tabs/mine";

  // 获取content
  static CONTENT = "/site/content";
  // 获取地址

  static ADDRESS = "/site/mobile/commodity/user/address";
  // 访客列表
  static VISITOR_LIST = "/site/mobile/campaign/visitor/list";

  // 订单数量统计
  static ORDER_STATUS_COUNT = "/wxapi/payOrder/statusCount";

  //粉丝数量
  static FUNS_STATUS_COUNT = "/wxapi/user/fans/count";

  // 起提金额
  static ATLEAST_MONEY = "/wxapi/payOrder/transfer/atLeast";

  // 商品二维码
  static GOODS_SHARE_PIC = "/wxapi/goods/getGoodsSharePic";

  // 入驻二维码
  static JOIN_SHARE_PIC = "/wxapi/user/inviteOpenPic";

  // 赚钱二维码
  static SHOP_SHARE_PIC = "/wxapi/user/takeMoneySharePic";

  //定制品订单详情
  static CUSTOM_ORDER_DETAIL = "/site/mobile/custom/order/detail";
  //定制品快速报价列表
  static COUSTOM_ORDER_LIST = "/site/mobile/custom/order/list/";
  //添加方案
  static ADD_SCHEMA = "/site/mobile/custom/order/add/scheme";

  //获取AI记录
  static AI_RECORD = "/mobile/mzdiy/customer/list";
  //获取AI二维码
  static AI_QRCODE = "/mobile/mzdiy/share/rendering.jpg";
  //获取AI客户数量
  static AI_Customer_Num = "mobile/mzdiy/customer/count/bymobile";
  //获取预约列表
  static Appointment_List = "wxapi/user/appointmentList";
  //获取预约列表
  static UPDATE_DISTRIBUTOR = "/wxapi/distributor/update";
  //合同列表
  static CONTRACT_LIST = "site/mobile/big-data/super-qrcode/order/list";
  //合同详情
  static CONTRACT_DETAIL = "site/mobile/big-data/super-qrcode/order/detail";

  //-获取账户信息
  static USER_ACCOUNT = "/wxapi/user/getAccount";
  //创建提现申请
  static WITHDRAW_APPLY = "/wxapi/payOrder/withdrawApply/create";

  //提现申请列表
  static WITHDRAW_APPLY_LIST = "/wxapi/payOrder/withdrawApply/list";
  //提现列表
  static WITHDRAW_LIST = "/wxapi/payOrder/transfer/list";

  // 上传设计方案
  static UP_DESIGN = "/mobile/custom/order/upload/schemefile";

  //获取核销码
  static GET_CODE_DETAIL = "/services/wxapi/payOrder/writeOffPic";
  //获取核销码详情
  static GET_CODE_INFO = "/services/wxapi/payOrder";
  //核销
  static CHECK_CODE = "/services/wxapi/payOrder/writeOff";

  // 售后订单统计
  static ORDER_SUPPORT_COUNT = "/services/support/supportApply/count";
  // 售后订单
  static ORDER_SUPPORT = "/services/support";
  // 售后单初始化信息
  static ORDER_SALESSUPPORT = "/services/wxapi/saleSupport";
}
