import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetAll = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionAll'],
    queryFn: () => axiosInstance.get<any>(`/page/all?language=${locale}`),
    select(data) {
      return data.data
    },
  })
}