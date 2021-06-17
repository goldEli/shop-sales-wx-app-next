import Taro from "@tarojs/taro";

/**
 *  数据缓存类
 * @param appKey 用于存储数据时键名的前缀
 * @param storage 本地存储或会话存储
 **/
export const MINUTES: number = 60000;
export const HOURS: number = 60 * MINUTES;
export const DAY: number = 24 * HOURS;
export const WEEK: number = 7 * DAY;
export const MONTH: number = 30 * DAY;

const defaultExpire = 30 * DAY;

interface IStoregeObj {
  setStorageSync: (key: string, data: any) => void;
  getStorageSync: <T = any>(key: string) => T;
  removeStorageSync: (key: string) => void;
}
class StorageLWJ {
  private storage: IStoregeObj;
  private appKey: string;
  /**
   * 数据缓存类构造方法
   * @param appKey 用于存储数据时键名的前缀
   * @param storage 本地存储或会话存储
   */
  constructor(appKey: string, storage: IStoregeObj) {
    this.storage = storage || localStorage;
    this.appKey = appKey + "-";
  }

  /**
   * 存储数据
   * @param key   键名
   * @param v     键值
   * @param expire  有效期， ms 单位
   */
  setStorageSync(key: string, v: any, expire = defaultExpire) {
    const { storage, appKey } = this;
    const d = {
      expire: Date.now() + expire,
      data: v,
    };
    storage.setStorageSync(appKey + key.toString(), JSON.stringify(d));
  }

  /**
   * 获取数据
   * @param key   键名
   * @returns     返回键值， 如果过期则为空
   */
  getStorageSync(key: string) {
    const { storage, appKey } = this;
    const k = appKey + key.toString();
    var obj = storage.getStorageSync(k)
      ? JSON.parse(storage.getStorageSync(k))
      : undefined;
    if (obj?.expire < Date.now()) {
      storage.removeStorageSync(k);
      return;
    }
    return obj?.data;
  }

  /**
   * 删除存储的数据
   * @param key
   */
  removeStorageSync(key: string) {
    const { storage, appKey } = this;
    const k = appKey + key.toString();
    storage.removeStorageSync(k);
  }

  /**
   * 清空数据
   */
  clear() {
    const { storage, appKey } = this;
    Object.keys(storage).forEach(
      (k) => k.indexOf(appKey) === 0 && storage.removeStorageSync(k)
    );
  }
}

const TaroStorage = {
  setStorageSync: Taro.setStorageSync,
  getStorageSync: Taro.getStorageSync,
  removeStorageSync: Taro.removeStorageSync,
};

export const storageSync = new StorageLWJ("lwj", TaroStorage);
