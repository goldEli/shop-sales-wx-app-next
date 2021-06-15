import { serverErrorMessage } from "../utils/func";
import { jump } from "../utils/";
import $storage from "../utils/storage";
import cookies from "../vendor/weapp-cookie/weapp-cookie";
import Taro from "@tarojs/taro"

/**
 * Reject when status 4xx or 5xx
 * @param context
 * @param next
 * @returns {PromiseLike<T> | Promise<T>}
 */
export const interceptorRejectCommon = async (context, next) => {
  return next().then(() => {
    Taro.hideNavigationBarLoading({});

    if (context.url.indexOf("/site/") !== -1) {
      const localConfitHasMd5 = $storage.get(
        "cache-config-site-hash-md5",
        null
      );
      const confitHasMd5 = context.headers["config-site-hash-md5"];
      if (
        !confitHasMd5 ||
        (confitHasMd5 && confitHasMd5 !== localConfitHasMd5)
      ) {
        console.log(confitHasMd5, localConfitHasMd5);
        // 重新拉取系统配置
        $storage.set("cache-system-config", null);
        $storage.set("cache-config-site-hash-md5", confitHasMd5);
      }
    }

    let cookieArr = cookies.getCookies();
    if (cookieArr["LX-WXSRF-JTOKEN"]) {
      $storage.set("LX-WXSRF-JTOKEN", cookieArr["LX-WXSRF-JTOKEN"]);
    }

    if (context.status == 401) {
      // 清除登陆信息，并跳转到登陆页面
      Taro.clearStorageSync();
      jump("pages/guide/index");
      return null;
    }

    if (
      ",300,301,302,303,304,305,306,307,404,405,502,503,504,".indexOf(
        context.status
      ) > 0
    ) {
      //不需要获取消息的状态
      throw serverErrorMessage(context.response);
    } else if (context.status == 403) {
      const msg = serverErrorMessage("接口没有权限" + context.url);
      throw msg;
    } else if (context.status >= 400) {
      throw serverErrorMessage(context.response);
    }
    if (context.response.code >= 1) {
      throw serverErrorMessage(context.response);
    }
  });
};
