import React from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "../../style/custom-theme.scss";
// import Title from "../../components/title";
import Title from "src/components/title";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <>
      <AtButton type="primary">123</AtButton>
      <Title text="123" />
    </>
  );
};

export default Home;
