import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetNews = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionNews&Blog'],
    queryFn: () => axiosInstance.post<any>('/news/get-by-category', {language: locale, page: 1, size: 12, news_category_id: 1}),
    select(data) {
      return data.data.data
    },
  })
}