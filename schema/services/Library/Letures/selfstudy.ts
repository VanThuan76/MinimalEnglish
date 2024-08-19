import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useGetSelfstudyData = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ['selfstudyData'],
    queryFn: () => axiosInstance.post<any>('/lecture/get-by-lecture-type', { lecture_type_id: 1, language: locale }),
    select(data) {
      return data.data.data; 
    },
  });
};