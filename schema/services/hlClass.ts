import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

interface IResponseHighlightClass {
    current_page: number;
    data: Class[];
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

interface Class {
    id: number;
    image: string;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: number;
    status: number;
    name: string;
    description: string;
    content: null | string;
}
export const useGetHLClass = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['sectionHLClass'],
        queryFn: () => axiosInstance.post<IBaseResponse<IResponseHighlightClass>>('/class/high-light', { language: locale, page: 1, size: 12 }),
        select(data) {
            return data.data.data //Fixed
        },
    })
}
