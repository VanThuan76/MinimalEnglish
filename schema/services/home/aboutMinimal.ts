import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetTitleAbout = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionTitleAbout'],
    queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: 1}),
    select(data) {
      return data.data[1]
    },
  })
}

export const useGetAbout = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionAbout'],
    queryFn: () => axiosInstance.post<any>('/component/get-by-section', {language: locale, section_id: 5}),
    select(data) {
      return data.data[0]
    },
  })
}