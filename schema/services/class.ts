import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';
import { useLocale } from 'next-intl';

interface Class_Detail {
    id: number,
    image: string,
    created_at: string,
    updated_at: string,
    created_by: string,
    updated_by: string,
    order: number,
    status: number,
    name: string,
    description: string,
    content: string,
}

export const useGetClassData = (class_id: string) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['classDetail', class_id],
        queryFn: () => axiosInstance.post<IBaseResponse<Class_Detail[]>>('/class/get-by-id', { language: locale, id: class_id }),
        select(data) {
            return data.data[0]
        },
    });
};
