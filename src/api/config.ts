export const SERVICES = "/services";
export const API_ADMIN = "/api/admin";
export const API_SPECIAL = "/api";
export const API_CMS_ADMIN = `${API_SPECIAL}/cmsAdmin`;

export const APIS = {
  HOME_PAGE_INFO: `${API_SPECIAL}/store/ordinary`,
  TENANT_INFO: `${SERVICES}/wxapi/userLogin/getTenantInfo`,
  DISTRIBUTOR_DETAIL: "/services/wxapi/distributor",

  GOODS: `${API_SPECIAL}/mobile/commodity/goods`,
  CATE_LIST: `${API_SPECIAL}/mobile/commodity`,
  BANNER: `${API_SPECIAL}/content/banner`,
  RECOMMEND: `${API_SPECIAL}/mobile/commodity/position`,
  STORE_CODE_PATH: `${API_SPECIAL}/mobile/shop/distributors/detail`,
  DEFAULT_STORE_CODE_PATH: `${API_SPECIAL}/salesCommon/getTenantInfo`,
  CATEGORY: `${API_SPECIAL}/mobile/commodity/catenav/list`,
  GOODS_LIST: `${API_SPECIAL}/mobile/spu/list`,
  FIND_TYPES: `${API_SPECIAL}/cate/list`,
  FIND_LISTS: `${API_SPECIAL}/content/list`,
  FIND_DETAIL: `${API_SPECIAL}/content/detail`,
  APP_CONFIG: `${API_SPECIAL}/config`,
};
