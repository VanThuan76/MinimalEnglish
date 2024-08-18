import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetClass = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionClass'],
    queryFn: () => axiosInstance.post<any>('/class/high-light', {language: locale, page: 1, size: 10}),
    select(data) {
      return data.data.data
    },
  })
}

export const useGetTitleClass = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionTitleClass'],
    queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: 1}),
    select(data) {
      return data.data[2]
    },
  })
}

export const useGetAllClass = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionAllClass'],
    queryFn: () => axiosInstance.post<any>('/class/all-short', {language: locale}),
    select(data) {
      return data.data
    },
  })
}