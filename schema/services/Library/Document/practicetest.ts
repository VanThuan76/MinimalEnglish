import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useGetPractivetestData = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ['practivetestData'],
    queryFn: () => axiosInstance.post<any>('/document/get-by-document-type', { document_type_id: 1, language: locale }),
    select(data) {
      return data.data.data; 
    },
  });
};
