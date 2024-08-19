import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/api';
import { useLocale } from 'next-intl';

export const useSectionByPage = (page_id: number) => {
  const locale = useLocale ()
  return useQuery({
    queryKey: ['sectionByPage'],
    queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id}),
    select(data){
      return data.data
    },
  })
};
