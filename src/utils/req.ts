/* global window */
import _ from "lodash";
import Taro from "@tarojs/taro";
import { IResponce } from "@src/type";

interface IOptions {
  loading?: boolean;
  url: string;
  data?: { [key in string]: any };
  method: "GET" | "POST" | "DELETE" | "PUT";
}

const defaultOptions = {
  loading: true,
};
export const req = <T = any>(options: IOptions) => {
  options = { ...defaultOptions, ...options };
  const res = Taro.request<IResponce<T>>({
    url: options.url, //仅为示例，并非真实的接口地址
    data: options.data,
    header: {
      "content-type": "application/json", // 默认值
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
  return res.then((data) => data.data.result);
};
