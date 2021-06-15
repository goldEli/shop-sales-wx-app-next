import React from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "../../style/custom-theme.scss";
// import Title from "../../components/title";
import Title from "src/components/title";
import {
  BlankComponents,
  TitleText,
  PhotoAds,
  StoreInfo,
  GraphicNavigation,
  CategoryNavigation,
  GoldCoinPurchase,
  ProductSearch,
  PhotoCube,
  ProductRecommendation,
} from "lwj-mobile-ui";
// import 'lwj-mobile-ui/dist/styles/components/ProductRecommendation.scss'
import "lwj-mobile-ui/dist/index.css";
import { useHomePageInfo } from "src/api/resource/home";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const { data } = useHomePageInfo();
  console.log(data);
  return (
    <View>
      <AtButton type="primary">this 123 home page</AtButton>
      <Title text="title" />
      <TitleText />
    </View>
  );
};

export default Home;
