import React from "react";
import { View } from "@tarojs/components";

interface ITitleProps {
  text: string
}

const Title: React.FC<ITitleProps> = (props) => {
  return <View className="color">{props.text}</View>;
};

export default Title;
