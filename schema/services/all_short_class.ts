import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetAllClass = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['section_All_Class'],
    queryFn: () => axiosInstance.post<any>('/class/all-short', {language: locale}),
    select(data) {
      return data.data || []
    },
  })
}
