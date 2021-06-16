import React from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "../../style/custom-theme.scss";

// import 'lwj-mobile-ui/dist/styles/components/ProductRecommendation.scss'
import { useHomePageInfo } from "src/api/resource/home";
import ListItem from "./components/ListItem";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const { pageConfig, pointData } = useHomePageInfo();
  console.log({ pageConfig, pointData });
  return (
    <View>
      {/* <AtButton type="primary">this 123 home page</AtButton>
      <Title text="title" />
      <TitleText /> */}
      {pointData.map((item) => {
        return (
          <ListItem
            height={item.point.h}
            config={item.item.config}
            type={item.item.type}
          />
        );
      })}
    </View>
  );
};

export default Home;
