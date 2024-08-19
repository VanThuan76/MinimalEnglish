import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetDetail = ({slug}: {slug: string}) => {
  const locale = useLocale()
  return useQuery({
    queryKey: [slug],
    queryFn: () => axiosInstance.post<any>('/news/get-by-slug', {language: locale, page: 1, slug: slug}),
    select(data) {
      return data.data[0]
    },
  })
}