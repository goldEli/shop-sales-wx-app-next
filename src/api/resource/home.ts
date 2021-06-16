import { useQuery } from "react-query";
// import { TResponce1 } from 'src/type';
import { API_SPECIAL } from "../config";
import _ from "lodash";
import { req } from "src/utils/req";
import { IHomePageInfo, IHtmlParam } from "../type";
import { useTenantInfo } from "./tenant";
import { IResponse } from "src/type";

const HOME_PAGE_INFO = `${API_SPECIAL}/store/ordinary`;

async function getHomePageInfo(tenantSiteKey?: string) {
  if (!tenantSiteKey) {
    return Promise.reject("tenantSiteKey is emptpy");
  }
  return req<IResponse<IHomePageInfo>>({
    url: HOME_PAGE_INFO,
    method: "GET",
    header: { "Site-Key": tenantSiteKey },
  });
}
const data1: IHomePageInfo = {
  _id: "60b754aba6c6d31ec37a9b1e",
  key: "ordinary",
  title: "店铺装修ordinary",
  status: 1,
  user_id: "",
  user_name: "",
  system: "andaren",
  is_change: 1,
  is_index: 0,
  is_system: 0,
  updated_at: "2021-06-07 09:10:50",
  created_at: "2021-06-02 17:51:39",
  id: "60b754aba6c6d31ec37a9b1e",
  content_info: [
    {
      _id: "60c329b09e055f5b39679bd4",
      client: "wap",
      content: "",
      html_param:
        '{"pointData":[{"id":"989355","item":{"type":"CategoryNavigation","config":{"name":""},"h":38,"editableEl":[{"key":"name","name":"组件名称","type":"Text"}],"category":"base","x":0},"point":{"i":"x-0","x":0,"y":0,"w":24,"h":38,"isBounded":true,"static":true},"status":"inToCanvas","translateSortX":0,"translateSortY":0},{"id":"258572","item":{"type":"ProductSearch","config":{"name":"","borderStyle":"none"},"h":28,"editableEl":[{"key":"name","name":"组件名称","type":"Text"},{"key":"borderStyle","name":"框体样式","type":"Select","range":[{"key":"normal","text":"有边框"},{"key":"none","text":"无边框"}]}],"category":"base","x":0},"point":{"w":24,"h":28,"x":0,"y":38,"i":"258572","moved":false,"static":false,"isBounded":true},"status":"inToCanvas","translateSortX":0,"translateSortY":76},{"id":"119485","item":{"type":"GraphicNavigation","config":{"name":"","paddingX":20,"imgList":[{"id":"20","title":"专题推荐0","desc":"专题推荐0","link":"http://www.liweijia.com","data":{"price":20,"sales_volume":123},"imgUrl":[{"uid":"0010","name":"image.png","status":"done","url":"https://static.liweijia.com/site-php/upload/content/f0b55851c60ff5047d209511baf347ad.jpg"}]},{"id":"21","title":"专题推荐1","desc":"专题推荐1","link":"http://www.liweijia.com","data":{"price":20,"sales_volume":123},"imgUrl":[{"uid":"0011","name":"image.png","status":"done","url":"https://static.liweijia.com/site-php/upload/content/f0b55851c60ff5047d209511baf347ad.jpg"}]},{"id":"22","title":"专题推荐2","desc":"专题推荐2","link":"http://www.liweijia.com","data":{"price":20,"sales_volume":123},"imgUrl":[{"uid":"0012","name":"image.png","status":"done","url":"https://static.liweijia.com/site-php/upload/content/f0b55851c60ff5047d209511baf347ad.jpg"}]},{"id":"23","title":"专题推荐3","desc":"专题推荐3","link":"http://www.liweijia.com","data":{"price":20,"sales_volume":123},"imgUrl":[{"uid":"0013","name":"image.png","status":"done","url":"https://static.liweijia.com/site-php/upload/content/f0b55851c60ff5047d209511baf347ad.jpg"}]}],"enableAIDesigner":false,"enableCustomizedGoods":false,"enableMemberInvitation":false,"enableMyOrder":false,"enableShareMoney":false,"enableStareBusinessCard":false},"h":35,"editableEl":[{"key":"name","name":"组件名称","type":"Text"},{"key":"imgList","name":"图片列表","type":"ImageList"},{"key":"paddingX","name":"页面边距","type":"Number"},{"key":"enableCustomizedGoods","name":"启用定制商品","type":"Switch"},{"key":"enableMyOrder","name":"启用我的订单","type":"Switch"},{"key":"enableShareMoney","name":"启用分享赚钱","type":"Switch"},{"key":"enableMemberInvitation","name":"启用会员邀请","type":"Switch"},{"key":"enableStareBusinessCard","name":"启用店铺名片","type":"Switch"},{"key":"enableAIDesigner","name":"启用AI设计师","type":"Switch"}],"category":"base","x":0},"point":{"w":24,"h":45,"x":0,"y":66,"i":"119485","moved":true,"static":false,"isBounded":true},"status":"inToCanvas","translateSortX":0,"translateSortY":132},{"id":"161767","item":{"type":"ProductRecommendation","config":{"name":"","borderRadius":3,"productList":[{"id":"10408784","name":"zmf租户在供应商列表修改商品价格，未同步到销售商品","cover_path":"https://static.liweijia.com/site-php/upload/commodity-goods/3ba67429651a838f0b87ecdce8d1c8e0.png","price":100,"sales_volume":3,"description":""},{"id":"10357209","name":"发票相关商品","cover_path":"http://webimg-handle.liweijia.com/lwj_shop/upload/commodity-goods/406348ddabd678f3fdb01f9fc104062e.jpg","price":200,"sales_volume":4,"description":""}],"template":"twoInARow","enableProductDesc":true,"enableProductPrice":true,"enableProductSales":true,"enableProductTitle":true},"h":95,"editableEl":[{"key":"name","name":"组件名称","type":"Text"},{"key":"template","name":"选择模板","type":"Select","range":[{"key":"twoInARow","text":"一行二个"},{"key":"horizontalScrolling","text":"横向滑动"}]},{"key":"productList","name":"选择商品","type":"ProductList"},{"key":"borderRadius","name":"圆角","type":"Number"},{"key":"enableProductTitle","name":"启用商品名称","type":"Switch"},{"key":"enableProductDesc","name":"启用商品描述","type":"Switch"},{"key":"enableProductPrice","name":"启用商品价格","type":"Switch"},{"key":"enableProductSales","name":"启用商品销量","type":"Switch"}],"category":"base","x":0},"point":{"w":24,"h":153,"x":0,"y":111,"i":"161767","moved":false,"static":false,"isBounded":true},"status":"inToCanvas","translateSortX":0,"translateSortY":222},{"id":"620539","item":{"type":"TitleText","config":{"name":"","paddingX":20,"color":"black","text":"标题文本","align":"center","fontSize":"14","fontWeight":"bold","lineHeight":30},"h":28,"editableEl":[{"key":"name","name":"组件名称","type":"Text"},{"key":"text","name":"内容","type":"Text"},{"key":"align","name":"显示位置","type":"Select","range":[{"key":"left","text":"居左"},{"key":"center","text":"居中"},{"key":"end","text":"居右"}]},{"key":"fontSize","name":"文字大小","type":"Select","range":[{"key":"16","text":"大"},{"key":"14","text":"中"},{"key":"12","text":"小"}]},{"key":"fontWeight","name":"文字粗细","type":"Select","range":[{"key":"bold","text":"加粗"},{"key":"normal","text":"不加粗"}]},{"key":"color","name":"文字颜色","type":"Color"},{"key":"lineHeight","name":"行高","type":"Number"},{"key":"paddingX","name":"页面边距","type":"Number"}],"category":"base","x":0},"point":{"i":"x-2","x":0,"y":264,"w":24,"h":28,"isBounded":true,"static":false},"status":"inToCanvas","translateSortX":0,"translateSortY":528},{"id":"852973","item":{"type":"BlankComponents","config":{"name":"","bgColor":"rgba(199,116,116,1)"},"h":28,"editableEl":[{"key":"name","name":"组件名称","type":"Text"},{"key":"bgColor","name":"背景颜色","type":"Color"}],"category":"base","x":0},"point":{"w":24,"h":56,"x":0,"y":292,"i":"852973","moved":false,"static":false,"isBounded":true},"status":"inToCanvas","translateSortX":0,"translateSortY":584},{"id":"915323","item":{"type":"StoreInfo","config":{"name":""},"h":40.5,"editableEl":[{"key":"name","name":"组件名称","type":"Text"}],"category":"base","x":0},"point":{"i":"x-6","x":0,"y":348,"w":24,"h":40.5,"isBounded":true,"static":false},"status":"inToCanvas","translateSortX":0,"translateSortY":696},{"id":"601200","item":{"type":"PhotoCube","config":{"name":"","template":"leftTwoRightTwo","imgList":[{"title":"专题推荐0","desc":"专题推荐0","clickHref":["wxapp","kefu"],"imgUrl":[{"uid":"0010","name":"image.png","status":"done","url":"https://static.liweijia.com/site-php/upload/content/f0b55851c60ff5047d209511baf347ad.jpg"}],"pageKey":"productSearchPage","wxapplink":"/pages/search/index?keyword=123","id":"20"},{"title":"专题推荐1","desc":"专题推荐1","clickHref":["wxapp"],"imgUrl":[{"uid":"rc-upload-1623728055083-5","name":"946b1d1ff5be182fbcbc2459b3264598.png","status":"done","url":"http://img-staging.liweijia.com/site-php/upload/special/946b1d1ff5be182fbcbc2459b3264598.png"}],"pageKey":"productDetailPage","wxapplink":"/pages/goods/detail/index?spu_id=10408650","id":"21"},{"title":"专题推荐2","desc":"专题推荐2","clickHref":["wxapp"],"imgUrl":[{"uid":"0012","name":"image.png","status":"done","url":"https://static.liweijia.com/site-php/upload/content/f0b55851c60ff5047d209511baf347ad.jpg"}],"pageKey":"productCategoryPage","wxapplink":"/pages/goods/index/index?id=1031297&pid=1031200","id":"22"},{"title":"专题推荐3","desc":"专题推荐3","clickHref":["wxapp"],"imgUrl":[{"uid":"rc-upload-1623728055083-9","name":"946b1d1ff5be182fbcbc2459b3264598.png","status":"done","url":"http://img-staging.liweijia.com/site-php/upload/special/946b1d1ff5be182fbcbc2459b3264598.png"}],"pageKey":"landingPage","wxapplink":"http://www.liweijia.com/special/navigation_5fe016264afdff224d612972/andaren","id":"23"}],"imagePadding":30,"borderRadius":3,"paddingX":20},"h":28,"editableEl":[{"key":"name","name":"组件名称","type":"Text"},{"key":"imagePadding","name":"图片间距","type":"Number"},{"key":"template","name":"选择模板","type":"Select","range":[{"key":"twoInARow","text":"一行二个"},{"key":"threeInARow","text":"一行三个"},{"key":"fourInARow","text":"一行四个"},{"key":"upOneDownThree","text":"上一下三"},{"key":"leftTwoRightTwo","text":"左二右二"},{"key":"leftOneRightTwo","text":"左一右二"},{"key":"leftOneIRightThree","text":"左一右三"}]},{"key":"imgList","name":"图片列表","type":"ImageList"},{"key":"borderRadius","name":"圆角","type":"Number"},{"key":"paddingX","name":"页面边距","type":"Number"}],"category":"base","x":0},"point":{"w":24,"h":183,"x":0,"y":388.5,"i":"601200","moved":false,"static":false,"isBounded":true},"status":"inToCanvas","translateSortX":0,"translateSortY":777}],"pageConfig":{"title":"页面标题","template":"standard","online_consult":1,"sub_status":1,"bgColor":"rgba(242,197,197,1)","bgImg":[],"modalAdsBgImg":[{"uid":"rc-upload-1623735992692-6","name":"946b1d1ff5be182fbcbc2459b3264598.png","status":"done","url":"http://img-staging.liweijia.com/site-php/upload/special/946b1d1ff5be182fbcbc2459b3264598.png"}],"modalAdsBgColor":"rgba(189,16,224,1)","modalAdsBgRadius":0,"modalAdsBgTime":3}}',
      param: '{"online_consult":1,"sub_status":1}',
      sub_status: 1,
      type: 2,
      sid: "60b754aba6c6d31ec37a9b1e",
      pv_num: 0,
      uv_num: 1,
      updated_at: "2021-06-15 13:49:15",
      created_at: "2021-06-11 17:15:28",
      id: "60c329b09e055f5b39679bd4",
    },
  ],
};
export function useHomePageInfo() {
  const { tenantSiteKey } = useTenantInfo();
  let { data, ...rest } = useQuery(
    [HOME_PAGE_INFO, tenantSiteKey],
    // () => getHomePageInfo(tenantSiteKey),
    () => getHomePageInfo("andaren"),
    {
      enabled: !!tenantSiteKey,
    }
  );
  const d = data?.data.result
  // const d = data1;

  const html_param =
    d?.content_info?.find((item) => item.client === "wap")?.html_param || "{}";
  const { pageConfig, pointData } = (JSON.parse(html_param) ||
    {}) as IHtmlParam;

  return {
    // data: data?.data.result,
    data: d,
    pageConfig,
    pointData,
    ...rest,
  };
}
