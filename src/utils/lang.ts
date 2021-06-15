export default class Lang {
  // 判断字符串是否为空
  static isEmpty(str) {
    return str == "" || str == null || str == "null";
  }

  static isNull(str) {
    return !str && str !== 0 && typeof str !== "boolean" ? true : false;
  }

  static isObject(value) {
    let type = typeof value;
    return value != null && (type === "object" || type === "function");
  }

  // 判断字符串是否不为空
  static isNotEmpty(str) {
    return !this.isEmpty(str);
  }

  // 浮点求和
  static sum(numbers, toFixed = 2) {
    let sum = 0;
    for (const str of numbers) {
      if (!this.isNumber(str)) {
        return NaN;
      }
      const num = parseFloat(str);
      if (isNaN(num)) {
        return NaN;
      }
      sum += num;
    }
    return sum.toFixed(toFixed);
  }

  // 数字判断
  static isNumber(value) {
    const patrn = /^[-+]?\d+(\.\d+)?$/;
    return patrn.test(value);
  }

  // 数字判断
  static isPositiveNumber(value) {
    const patrn = /^[1-9]\d*$|^\.\d*$|^0\.\d*$|^[1-9]\d*\.\d*$|^0$/;
    return patrn.test(value);
  }

  // 数组判断
  static isArray(o) {
    return Object.prototype.toString.call(o) === "[object Array]";
  }

  static isDate(val) {
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  // 事件转日期
  static convertTimestapeToDay(timestape) {
    return timestape.substring(0, timestape.indexOf(" ")).replace(/-/g, ".");
  }
}
