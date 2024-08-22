import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

interface IRelatedNews {
    id: number;
    news_category_id: number;
    slug: string;
    read_time: number;
    image: string;
    order: null;
    status: number;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    title: string;
    content: string;
    description: string;
}

export const useGetRelated = ({ category_id, id }: { id: number, category_id: number }) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['new_related', id],
        queryFn: () => axiosInstance.post<IBaseResponse<IRelatedNews[]>>('/news/get-related', { language: locale, size: 3, news_category_id: category_id, id: id }),
        select(data) {
            return data.data
        },
    })
}
