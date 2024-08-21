import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/api';
import { useLocale } from 'next-intl';
import { useAppSelector } from '@/components/hooks/useRedux';

export const useSectionByPage = (page_id: number) => {
  const activeMenuId = useAppSelector(state => state.activeMenu);
  const locale = useLocale ()
  return useQuery({
    queryKey: [page_id],
    queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: activeMenuId}),
    select(data){
      return data.data || []
    },
  })
};
