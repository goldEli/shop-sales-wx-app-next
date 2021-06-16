export interface IHomePageInfo {
  _id: string;
  key: string;
  title: string;
  status: number;
  user_id: string;
  user_name: string;
  system: string;
  is_change: number;
  is_index: number;
  is_system: number;
  updated_at: string;
  created_at: string;
  id: string;
  content_info: {
    _id: string;
    client: string;
    content: string;
    html_param: string;
    param: string;
    sub_status: number;
    type: number;
    sid: string;
    pv_num: number;
    uv_num: number;
    updated_at: string;
    created_at: string;
    id: string;
  }[];
}

export interface IHtmlParam {
  pointData: IPointDataItem[];
  pageConfig: IPageConfig;
}

export type TPointDataItemType =
  | "BlankComponents"
  | "TitleText"
  | "PhotoAds"
  | "StoreInfo"
  | "GraphicNv"
  | "GraphicNavigation"
  | "CategoryNavigation"
  | "GoldCoinPurchase"
  | "ProductSearch"
  | "PhotoCube"
  | "ProductRecommendation";
interface IPointDataItem {
  id: string;
  item: {
    type: TPointDataItemType;
    config: Record<string, string>;
    h: number;
    editableEl: Record<string, string>[];
    category: "base";
    x: number;
  };
  point: {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    isBounded: boolean;
    static: boolean;
  };
  status: "inToCanvas";
  translateSortX: number;
  translateSortY: number;
}
interface IBgImg {
  uid: string;
  name: string;
  status: "done";
  url: string;
}
export interface IPageConfig {
  title: string;
  template: "standard" | "simple";
  online_consult: number;
  sub_status: number;
  bgColor: number;
  bgImg: IBgImg[];
  modalAdsBgImg: IBgImg[];
  modalAdsBgColor: string;
  modalAdsBgRadius: number;
  modalAdsBgTime: number;
}

export interface ITenantInfo {
  autoRegist: boolean;
  copyright: string;
  copyrightIcon: string;
  headImage: null;
  openInvoiceStatus: null;
  techSupport: string;
  tenantDistributorCode: string;
  tenantSiteKey: string;
  wxAppLogo: string;
}
