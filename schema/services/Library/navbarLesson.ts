import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { Lesson, IBaseResponse } from '@/app/[locale]/type';

interface UseGetNavbarLessonParams {
  queryKey?: string; 
}

export const useGetNavbarLesson = ({ queryKey }: UseGetNavbarLessonParams = {}) => {
  const locale = useLocale();  

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosInstance.post<IBaseResponse<Lesson[]>>('/lecture-type/all', { language: 'en' }),
    select: (data) => {
      return data.data; 
    },
  });
};
