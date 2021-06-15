import { useQuery } from "react-query";
// import { TResponce1 } from 'src/type';
import { API_SPECIAL } from "../config";
import _ from "lodash";
import { req } from "src/utils/req";
import { cons } from "src/utils/constants";
import { IResponce } from "@src/type";

const HOME_PAGE_INFO = cons.DOMAIN + `${API_SPECIAL}/store/ordinary`;

async function getHomePageInfo() {
  return req({ url: HOME_PAGE_INFO, method: "GET" });
}

export function useHomePageInfo() {
  const res = useQuery(HOME_PAGE_INFO, getHomePageInfo);
  return res;
}
