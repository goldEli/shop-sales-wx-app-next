export default {
  pages: [
    "pages/home/index",
    // 'pages/index/index',
    // 'subpackages/bar/index',
    // 'subpackages/foo/index'
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: 'custom'
  },
  tabBar: {
    position: "bottom",
    color: "#666",
    selectedColor: "#6799FF",
    backgroundColor: "#fdfdfd",
    borderStyle: "white",
    list: [
      {
        iconPath: "./assets/6799FF/images/tabbar/shouye.png",
        selectedIconPath: "./assets/6799FF/images/tabbar/shouyexuanzhong.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "./assets/6799FF/images/tabbar/faxian.png",
        selectedIconPath: "./assets/6799FF/images/tabbar/faxianxuanzhong.png",
        pagePath: "pages/discovery/index/index",
        text: "发现",
      },
      {
        iconPath: "./assets/6799FF/images/tabbar/gouwuche.png",
        selectedIconPath: "./assets/6799FF/images/tabbar/gouwuchexuanzhong.png",
        pagePath: "pages/cart/index",
        text: "购物车",
      },
      {
        iconPath: "./assets/6799FF/images/tabbar/gerenzhongxin.png",
        selectedIconPath:
          "./assets/6799FF/images/tabbar/gerenzhongxinxuanzhong.png",
        pagePath: "pages/user/user/index",
        text: "我的",
      },
    ],
  },
};
