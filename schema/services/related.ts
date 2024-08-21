import { IBaseResponse, Related } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetRelated = ({category_id, id}: {id: number, category_id:number}) => {
  const locale = useLocale()
  return useQuery({
    queryKey: [id],
    queryFn: () => axiosInstance.post<IBaseResponse<Related[]>>('/news/get-related', {language: locale, size: 3, news_category_id: category_id, id: id}),
    select(data) {
      return data.data || []
    },
  })
}
