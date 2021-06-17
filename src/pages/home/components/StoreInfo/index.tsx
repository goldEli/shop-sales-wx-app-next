import React from "react";
import { Image, View, Text } from "@tarojs/components";
import "./index.scss";
import { useDistributorDetail } from "src/api/resource/distributor";

interface IStoreInfoProps {}

const StoreInfo: React.FC<IStoreInfoProps> = (props) => {
  const { data, isLoading } = useDistributorDetail();
  if (isLoading) {
    return <></>
  }
  return (
    <View className="store-info">
      <View className="store-info-inner">
        <View className="avatar"></View>
        <View className="text">
          <Text className="text_name ">{data?.displayName}</Text>
          <br />
          <Text className="text_address ">{data?.distributorMapAddress}</Text>
        </View>
        <View className="action">
          <Image
            className="action-img"
            mode="aspectFit"
            src="https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_address.png"
          />
          <Image
            className="action-img"
            mode="aspectFit"
            src="https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_call.png"
          />
        </View>

        <View className="link">
          <View className="link-icon iconfont icon-angleright" />
        </View>
      </View>
    </View>
  );
};

export default StoreInfo;
