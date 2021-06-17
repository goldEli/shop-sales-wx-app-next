import { useQuery } from "react-query";
// import { TResponce1 } from 'src/type';
import { API_SPECIAL } from "../config";
import _ from "lodash";
import { req } from "src/utils/req";
import { IHomePageInfo, IHtmlParam } from "../type";
import { IResponse } from "src/type";

const HOME_PAGE_INFO = `${API_SPECIAL}/store/ordinary`;

async function getHomePageInfo() {
  // if (!tenantSiteKey) {
  //   return Promise.reject("tenantSiteKey is emptpy");
  // }
  return req<IResponse<IHomePageInfo>>({
    url: HOME_PAGE_INFO,
    method: "GET",
    // dev-test
    testDomain: "http://local.liweijia.com:8000"
    // header: { "Site-Key": tenantSiteKey },
  });
}

export function useHomePageInfo() {
  let { data, ...rest } = useQuery([HOME_PAGE_INFO], getHomePageInfo);
  const d = data?.data.result;
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
