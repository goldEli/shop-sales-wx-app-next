import Taro from "@tarojs/taro";
import { CONSTANTS } from "src/utils/constants";
import { GET_TENANT_INFO } from "src/api/resource/tenant";
import { ITenantInfo } from "src/api/type";
import { storageSync } from "src/utils/storage";

const key = "tenantInfo";
export const getTenantInfo = () => {
  return new Promise<ITenantInfo>((resolve, reject) => {
    const tenantInfo = storageSync.getStorageSync(key);
    if (tenantInfo) {
      resolve(tenantInfo);
      return;
    }
    Taro.request<ITenantInfo>({
      url: CONSTANTS.DOMAIN + GET_TENANT_INFO,
      header: {
        "content-type": "application/json", // 默认值
      },
      success: function (data) {
        // dev-test
        data.data.tenantSiteKey = "andaren";
        storageSync.setStorageSync(key, data.data);
        resolve(data.data);
      },
      fail: function (res) {
        Taro.showToast({ title: res.errMsg, icon: "none", duration: 2000 });
      },
    });
  });
};
