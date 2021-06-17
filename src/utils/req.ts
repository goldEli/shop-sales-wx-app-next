/* global window */
import _ from "lodash";
import Taro from "@tarojs/taro";
import { CONSTANTS } from "src/utils/constants";
import { getTenantInfo } from "./getTenantInfo";
import { showError } from "src/utils";
interface IOptions {
  loading?: boolean;
  url: string;
  data?: { [key in string]: any };
  method?: "GET" | "POST" | "DELETE" | "PUT";
  header?: { [key in string]: string };
  testDomain?: string;
}

const defaultOptions: Omit<IOptions, "url"> = {
  loading: true,
  method: "GET",
};
export const req = async <T = any>(options: IOptions) => {
  options = { ...defaultOptions, ...options };
  const { header = {} } = options;

  const talent = await getTenantInfo();

  const res = Taro.request<T>({
    url: (options.testDomain || CONSTANTS.DOMAIN) + options.url, //仅为示例，并非真实的接口地址
    data: options.data,
    header: {
      "content-type": "application/json", // 默认值
      "Site-Key": talent.tenantSiteKey,
      ...header,
    },
    success: function (res) {
      const { status } = res?.data || {};
      if (status === 500) {
        showError(res?.data?.message);
      }
      // return res.data.data;
    },
    fail: function (res) {
      showError(res.errMsg);
    },
  });
  return res;
};
