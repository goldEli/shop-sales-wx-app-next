import Taro from "@tarojs/taro";
export function showError(msg?: string) {
  Taro.showToast({ title: msg || "error", icon: "none", duration: 2000 });
}
