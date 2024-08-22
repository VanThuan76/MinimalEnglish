import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';


interface IResponseFeedBack {
    current_page: number;
    data: FeedBack[];
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

interface FeedBack {
    id: number;
    name: null;
    address: null;
    avatar: null;
    image: string;
    image_2: null;
    image_3: null;
    image_4: null;
    image_5: null;
    image_6: null;
    order: null;
    status: number;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    content: null;
}

export const useGetFeedback = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['sectionFeedback'],
        queryFn: () => axiosInstance.post<IBaseResponse<IResponseFeedBack>>('/feedback/all', { language: locale, page: 1, size: 18 }),
        select(data) {
            return data.data.data
        },
    })
}
