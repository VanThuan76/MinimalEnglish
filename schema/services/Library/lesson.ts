import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api";
import { useLocale } from "next-intl";

export const useGetlecture = ({lecture_type_id, page , size} : {page: number, lecture_type_id: number, size: number} ) => {
  const locale = useLocale();
  return useQuery({
    queryKey: ['lectures'],
    queryFn: async () => {
      const { data } = await axiosInstance.post<any>('/lecture/get-by-lecture-type', { language: locale, page: page, lecture_type_id: lecture_type_id, size: size });
      return data.data;
    },
    select(data) {
      return data;
    },
  });
};
