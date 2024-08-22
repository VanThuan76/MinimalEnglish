import { IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export interface IGetAllPage {
    id: number;
    url: string;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: number;
    status: number;
    name: string;
}

export const useGetAll = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ["getAllPage"],
        queryFn: () => axiosInstance.get<IBaseResponse<IGetAllPage[]>>(`/page/all?language=${locale}`),
        select(data) {
            return data.data
        },
    })
}
