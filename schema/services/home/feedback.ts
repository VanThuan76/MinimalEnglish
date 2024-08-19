import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetFeedback = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ['sectionFeedback'],
    queryFn: () => axiosInstance.post<any>('/component/get-by-section', {language: locale, section_id: 8}),
    select(data) {
      return data.data[0]
    },
  })
}