import { AllCategory, IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetAllCategory = () => {
  const locale = useLocale()
  return useQuery({
    queryKey: ["AllCategory"],
    queryFn: () => axiosInstance.post<IBaseResponse<AllCategory[]>>('/news-category/all', {language: locale}),
    select(data) {
      return data.data || []
    },
  })
}
