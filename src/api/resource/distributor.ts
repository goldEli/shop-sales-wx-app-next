import { req } from "src/utils/req";
import { useQuery } from "react-query";
import { IDistributorDetail } from "../type";
import { getTenantInfo } from "src/utils/getTenantInfo";
import { APIS } from "../config";

export const { DISTRIBUTOR_DETAIL } = APIS;

const getDistributorDetail = async () => {
  const tanantInfo = await getTenantInfo();
  let { tenantDistributorCode } = tanantInfo;
  // dev-test:
  tenantDistributorCode = "HXCDS02";
  const url = `${DISTRIBUTOR_DETAIL}/${tenantDistributorCode}/detail`;
  return req<IDistributorDetail>({ url });
};

export const useDistributorDetail = () => {
  const { data, ...rest } = useQuery(
    DISTRIBUTOR_DETAIL,
    getDistributorDetail
  );

  return {
    data: data?.data,
    ...data?.data,
    ...rest,
  };
};
