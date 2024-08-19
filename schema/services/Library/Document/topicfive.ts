import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useGetTopicfiveData = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ['topicfiveData'],
    queryFn: () => axiosInstance.post<any>('/document/get-by-document-type', { document_type_id: 1, language: locale }),
    select(data) {
      return data.data.data; 
    },
  });
};
