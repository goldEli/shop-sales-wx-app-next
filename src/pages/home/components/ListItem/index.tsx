import React from "react";
import { TPointDataItemType } from "src/api/type";
import {
  BlankComponents,
  TitleText,
  PhotoAds,
  // StoreInfo,
  GraphicNavigation,
  CategoryNavigation,
  GoldCoinPurchase,
  ProductSearch,
  PhotoCube,
  ProductRecommendation,
} from "lwj-mobile-ui";
import "lwj-mobile-ui/dist/index.css";
import StoreInfo from "../StoreInfo";

interface IListItemProps {
  type: TPointDataItemType;
  config: any;
  height: number;
}

const ListItem: React.FC<IListItemProps> = (props) => {
  const { type, config, height } = props;
  switch (type) {
    case "ProductSearch":
      return <ProductSearch {...config} />;
    case "BlankComponents":
      return <BlankComponents height={height} {...config} />;
    case "TitleText":
      return <TitleText {...config} height={height} />;
    case "PhotoAds":
      return <PhotoAds {...config} />;
    case "StoreInfo":
      return <StoreInfo {...config} />;
    case "GraphicNavigation":
      return <GraphicNavigation {...config} />;
    case "CategoryNavigation":
      return <CategoryNavigation {...config} />;
    case "GoldCoinPurchase":
      return <GoldCoinPurchase {...config} />;
    case "PhotoCube":
      return <PhotoCube {...config} />;
    case "ProductRecommendation":
      return <ProductRecommendation {...config} />;
    default:
      return <div>UI组件类型不存在</div>;
  }
};

export default React.memo(ListItem);
