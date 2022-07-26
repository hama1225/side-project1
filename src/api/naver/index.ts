import { apiPost } from "../../common/api";

export type NaverSearchRequestType = {
  startDate: string;
  endDate: string;
  timeUnit: string;
  keywordGroups: {
    groupName: string;
    keywords: string[];
  }[];
  device?: string;
  ages?: string[];
  gender?: string;
};

export type NaverSearchResponseType = {
  startDate: string;
  endDate: string;
  timeUnit: string;
  results: {
    title: string;
    keywords: string[];
    data: {
      period: string;
      ratio: number;
    }[];
  }[];
};

export const getNaverSearchTrendRatio = async (
  body: NaverSearchRequestType
) => {
  try {
    const { data } = await apiPost("/naver/v1/datalab/search", body);
    return data as NaverSearchResponseType;
  } catch (e) {
    throw e;
  }
};
