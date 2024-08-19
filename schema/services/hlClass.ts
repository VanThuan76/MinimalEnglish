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
