import axiosGlobal from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const apiNaverUrl = process.env.REACT_APP_NAVER_API_URL;

let apiAxios = axiosGlobal.create({
  baseURL: apiUrl,
  timeout: 30000,
  withCredentials: false,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});

let apiNaverAxios = axiosGlobal.create({
  baseURL: apiNaverUrl,
  timeout: 30000,
  withCredentials: false,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID as string,
    "X-Naver-Client-SECRET": process.env
      .REACT_APP_NAVER_CLIENT_SECRET as string,
  },
});

export async function apiPost(url: string, data: object, headers?: any) {
  try {
    return await apiAxios.post(apiUrl + url, data, { headers });
  } catch (e) {
    throw e;
  }
}

export async function apiGet(url: string, headers?: any) {
  try {
    return await apiAxios.get(apiUrl + url, { headers });
  } catch (e) {
    throw e;
  }
}

export async function apiNaverPost(url: string, data: object, headers?: any) {
  try {
    return await apiAxios.post(apiUrl + url, data, { headers });
  } catch (e) {
    throw e;
  }
}

export async function apiNaverGet(url: string, headers?: any) {
  try {
    return await apiAxios.get(apiUrl + url, { headers });
  } catch (e) {
    throw e;
  }
}
