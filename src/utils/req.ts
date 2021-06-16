/* global window */
import _ from "lodash";
import Taro from "@tarojs/taro";
import { cons } from "src/utils/constants";

interface IOptions {
  loading?: boolean;
  url: string;
  data?: { [key in string]: any };
  method?: "GET" | "POST" | "DELETE" | "PUT";
  header?: { [key in string]: string };
}

const defaultOptions: Omit<IOptions, "url"> = {
  loading: true,
  method: "GET",
};
export const req = <T = any>(options: IOptions) => {
  options = { ...defaultOptions, ...options };
  const { header = {} } = options;
  const res = Taro.request<T>({
    url: cons.DOMAIN + options.url, //仅为示例，并非真实的接口地址
    data: options.data,
    header: {
      "content-type": "application/json", // 默认值
      ...header,
    },
    success: function (res) {
      // console.log(res.data);
      const { statusCode } = res.data;
      // return res.data.data;
    },
    fail: function (res) {
      Taro.showToast({ title: res.errMsg, icon: "none", duration: 2000 });
    },
  });
  return res;
};
