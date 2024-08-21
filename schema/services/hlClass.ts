import { HL, IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetHLClass = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionHLClass'],
    queryFn: () => axiosInstance.post<IBaseResponse<HL>>('/class/high-light', {language: locale, page: 1, size: 12}),
    select(data) {
      return data.data.data || []
    },
  })
}
