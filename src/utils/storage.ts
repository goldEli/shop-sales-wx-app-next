import Taro from "@tarojs/taro";
import Lang from "./lang";
import { hexMD5 } from "./md5";

/**
 * _options.exp-----过期时间，单位秒
 * ttl
 *
 * @param key
 * @param value
 * @param options
 * @returns {boolean}
 */
const setObject = (key, value, options) => {
  // _options.exp-----过期时间，单位秒
  let _key = md5Key(key);
  let _options = options || {};
  let _now = new Date().getTime();
  let _exp = parseInt(_options.exp);
  _exp = _exp ? _exp : 2592000; // 默认过期时间为30天

  if (Lang.isNull(value)) {
    try {
      Taro.removeStorageSync(_key);
    } catch (e) {
      return false;
    }
  } else {
    try {
      Taro.setStorageSync(_key, {
        key: key,
        value: value,
        time: _now + _exp * 1000,
      });
    } catch (e) {
      return false;
    }
  }
  return true;
};
const getObject = (key) => {
  let _now = new Date().getTime();
  let _obj: any = {};

  try {
    _obj = Taro.getStorageSync(key) || {};
  } catch (e) {
    _obj = {};
  }
  if (_obj.time <= _now) {
    // 已经过期
    try {
      Taro.removeStorageSync(key);
    } catch (e) {}
    return null;
  }
  return _obj.value;
};
const md5Key = (key) => {
  const res = Taro.getSystemInfoSync();
  return hexMD5(res.version + key);
};

export default class Storage {
  // 判断字符串是否为空
  static get(key, defaultValue?: any) {
    let _result = getObject(md5Key(key));
    return _result || defaultValue;
  }
  static set(key, value?: any, options?: any) {
    setObject(key, value, options);
    return true;
  }
}
