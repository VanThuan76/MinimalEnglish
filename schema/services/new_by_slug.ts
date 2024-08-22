import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

export interface INewsBySlug {
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

export const useGetNewsBySlug = ({ slug }: { slug: string }) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['news', slug],
        queryFn: () => axiosInstance.post<IBaseResponse<INewsBySlug[]>>('/news/get-by-slug', { language: locale, slug: slug }),
        select(data) {
            return data.data[0]
        },
    })
}
