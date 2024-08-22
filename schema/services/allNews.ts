import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';

interface IResponseNews {
    current_page: number;
    data: News[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

interface Link {
    url: null | string;
    label: string;
    active: boolean;
}

export interface News {
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

export const useGetNews = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['sectionNews&Blog'],
        queryFn: () => axiosInstance.post<IBaseResponse<IResponseNews>>('/news/get-by-category', { language: locale, page: 1, size: 30, news_category_id: 1 }),
        select(data) {
            return data.data.data
        },
    })
}
