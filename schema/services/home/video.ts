import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetVideo = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionVideo'],
    queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: 1}),
    select(data) {
      return data.data[5]
    },
  })
}