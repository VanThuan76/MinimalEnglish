import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

interface IAllCategory {
    id: number;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: number;
    status: number;
    name: string;
    description: string;
}

export const useGetAllCategory = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ["AllCategory"],
        queryFn: () => axiosInstance.post<IBaseResponse<IAllCategory[]>>('/news-category/all', { language: locale }),
        select(data) {
            return data.data
        },
    })
}
