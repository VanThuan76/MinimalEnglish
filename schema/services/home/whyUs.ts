import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetTitleWhyUs = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionTitleWhyUs'],
    queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: 1}),
    select(data) {
      return data.data[4]
    },
  })
}

export const useGetWhyUs = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionWhyUs'],
    queryFn: () => axiosInstance.post<any>('/component/get-by-section', {language: locale, section_id: 10}),
    select(data) {
      return data.data
    },
  })
}