import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { axiosInstance } from '@/lib/api';

import { useAppSelector } from '@/components/hooks/useRedux';
import { IBaseResponse } from '@/app/[locale]/type';

export const useSectionByPage = (page_id: number) => {
    const activeMenuId = useAppSelector(state => state.activeMenu);
    const locale = useLocale()

    return useQuery({
        queryKey: ['section', page_id],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/section/get-by-page', { language: locale || 'vi', page_id: activeMenuId }),
        select(data) {
            return data.data
        },
    })
};
export const useSectionByUrl = (path: string) => {
    const activeMenuId = useAppSelector(state => state.activeMenu);
    const locale = useLocale()

    return useQuery({
        queryKey: ['section', path],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/page/get-by-url', { language: locale || 'vi', url: path }),
        select(data) {
            return data.data
        },
    })
};
