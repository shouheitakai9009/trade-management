import { useQuery } from "@tanstack/react-query";
import { fetchHello } from "../../../apis/hello";
import { HelloResponse } from "../../../apis/hello/type";

export const useHello = () => {
  return useQuery<HelloResponse>({
    queryKey: ["hello"],
    queryFn: fetchHello,
  });
};
