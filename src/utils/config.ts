const LWJ_API = '/api'

export default {
  CORS: [],
  api: {
    goods: `${LWJ_API}/mobile/commodity/goods`,
    cateList: `${LWJ_API}/mobile/commodity`,
    banner: `${LWJ_API}/content/banner`,
    recommend: `${LWJ_API}/mobile/commodity/position`,
    storeCodePath: `${LWJ_API}/mobile/shop/distributors/detail`,
    defaultstoreCodePath: `${LWJ_API}/salesCommon/getTenantInfo`,
    category: `${LWJ_API}/mobile/commodity/catenav/list`,
    goodsList: `${LWJ_API}/mobile/spu/list`,
    findTypes: `${LWJ_API}/cate/list`,
    findLists: `${LWJ_API}/content/list`,
    findDetail: `${LWJ_API}/content/detail`,
    appConfig: `${LWJ_API}/config`
  }
}
