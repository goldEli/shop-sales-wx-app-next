import React, { useState } from "react";
import { AtTabBar } from "taro-ui";
import Taro from "@tarojs/taro";

interface INavLayoutProps {}

const tabList = [
  {
    image: "https://static.liweijia.com/sales/lwj-plus/images/home.svg",
    selectedImage:
      "https://static.liweijia.com/sales/lwj-plus/images/home_active.svg",
    pagePath: "pages/index/index",
    title: "首页",
  },
  {
    image: "https://static.liweijia.com/sales/lwj-plus/images/discovery.svg",
    selectedImage:
      "https://static.liweijia.com/sales/lwj-plus/images/discovery_active.svg",
    pagePath: "pages/discovery/index/index",
    title: "发现",
  },
  {
    image: "https://static.liweijia.com/sales/lwj-plus/images/category.svg",
    selectedImage:
      "https://static.liweijia.com/sales/lwj-plus/images/category_active.svg",
    pagePath: "pages/cart/index",
    title: "购物车",
  },
  {
    image: "https://static.liweijia.com/sales/lwj-plus/images/hot.svg",
    selectedImage:
      "https://static.liweijia.com/sales/lwj-plus/images/hot_active.svg",
    pagePath: "pages/user/user/index",
    title: "我的",
  },
];
const NavLayout: React.FC<INavLayoutProps> = (props) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      {props.children}
      <AtTabBar
        tabList={tabList}
        onClick={(index) => {
          setCurrent(index);
          const url = "/" + tabList[index].pagePath
          console.log(url)
          Taro.switchTab({
            url,
          });
        }}
        current={current}
        fixed
      />
    </>
  );
};

export default NavLayout;
