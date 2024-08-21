import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { document, IBaseResponse } from '@/app/[locale]/type';

interface UseGetNavbarDocumentParams {
  queryKey?: string; 
}

export const useGetNavbarDocument = ({ queryKey }: UseGetNavbarDocumentParams = {}) => {
  const locale = useLocale();
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosInstance.post<IBaseResponse<document[]>>('/document-type/all', { language: locale }),   
    
    select(data) {
      return data;
    },
  });
};

