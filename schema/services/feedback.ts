import { FB, IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetFeedback = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionFeedback'],
    queryFn: () => axiosInstance.post<IBaseResponse<FB>>('/feedback/all', {language: locale, page: 1, size: 18}),
    select(data) {
      return data.data.data || []
    },
  })
}
