import { req } from "src/utils/req";
import { useQuery } from "react-query";
import { API_SPECIAL } from "../config";
import { ITenantInfo } from "../type";

const GET_TENANT_INFO = "/services/wxapi/userLogin/getTenantInfo";

const getTenantInfo = () => {
  return req<ITenantInfo>({ url: GET_TENANT_INFO });
};

export const useTenantInfo = () => {
  const { data, ...rest } = useQuery(GET_TENANT_INFO, getTenantInfo);

  return {
    data: data?.data,
    ...data?.data,
    ...rest,
  };
};
