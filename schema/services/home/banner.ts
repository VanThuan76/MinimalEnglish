import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetTitleBanner = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionTitleBanner'],
    queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: 1}),
    select(data) {
      return data.data[0]
    },
  })
}

export const useGetBanner = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionBanner'],
    queryFn: () => axiosInstance.post<any>('/component/get-by-section', {language: locale, section_id: 4}),
    select(data) {
      return data.data[0]
    },
  })
}