import apiClient from "../client";

export const fetchHello = async () => {
  const { data } = await apiClient.get("/hello");
  return data;
};
