import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api";
import { useLocale } from "next-intl";
import { useAppSelector } from '@/components/hooks/useRedux';
import { IBaseResponse } from "@/app/[locale]/type";


interface IResponseLecture {
    current_page: number;
    data: Lecture[];
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

interface Lecture {
    id: number;
    lecture_type_id: number;
    associcate_link: null;
    viewer: number;
    image: string;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: null;
    status: number;
    title: string;
    description: string;
    content: string;
}

export const useGetLecture = ({ page, size }: { page: number, size: number }) => {
    const locale = useLocale();
    const lecture_type_id = useAppSelector(state => state.activeLecture);

    return useQuery({
        queryKey: ['lectures'],
        queryFn: async () => {
            const { data } = await axiosInstance.post<IBaseResponse<IResponseLecture>>('/lecture/get-by-lecture-type', { language: locale, page: page, lecture_type_id: lecture_type_id, size: size });
            return data.data
        },
        select(data) {
            return data
        },
    });
};
