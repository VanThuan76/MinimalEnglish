import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { axiosInstance } from '@/lib/api';

import { IBaseResponse } from '@/app/[locale]/type';

interface IAllClass {
    id: number;
    order: number;
    name: string;
}

export const useGetAllClass = () => {
    const locale = useLocale()
    return useQuery({
        queryKey: ['section_All_Class'],
        queryFn: () => axiosInstance.post<IBaseResponse<IAllClass[]>>('/class/all-short', { language: locale }),
        select(data) {
            return data.data
        },
    })
}
