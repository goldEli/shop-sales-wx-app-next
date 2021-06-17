import { req } from "src/utils/req";
import { useQuery } from "react-query";
import { ITenantInfo } from "../type";
import { APIS } from "../config";

export const {TENANT_INFO} = APIS;

const getTenantInfo = () => {
  return req<ITenantInfo>({ url: TENANT_INFO });
};

export const useTenantInfo = () => {
  const { data, ...rest } = useQuery(TENANT_INFO, getTenantInfo);

  return {
    data: data?.data,
    ...data?.data,
    ...rest,
  };
};
