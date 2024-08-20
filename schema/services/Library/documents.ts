import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api";
import { useLocale } from "next-intl";

export const useGetDocuments = ({document_type_id, size} : {document_type_id: number, size: number} ) => {
  const locale = useLocale();
  return useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      const { data } = await axiosInstance.post<any>('/document/get-by-document-type', { language: locale, document_type_id: document_type_id, size: size  });
      return data.data;
    },
    select(data) {
      return data;
    },
  });
};
