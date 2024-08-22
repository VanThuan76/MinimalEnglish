import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api";
import { useLocale } from "next-intl";
import { useAppSelector } from '@/components/hooks/useRedux';
import { IBaseResponse } from "@/app/[locale]/type";

interface IResponseDocumentsByType {
    current_page: number;
    data: Document[];
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

interface Document {
    id: number;
    document_type_id: number;
    link_file: string;
    downloaded: number;
    image: string;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: number;
    status: number;
    title: string;
    description: string;
    content: string;
}

export const useGetDocuments = ({ size }: { size: number }) => {
    const locale = useLocale();
    const document_type_id = useAppSelector(state => state.activeDocument);
    return useQuery({
        queryKey: ['documents'],
        queryFn: async () => {
            const { data } = await axiosInstance.post<IBaseResponse<IResponseDocumentsByType>>('/document/get-by-document-type', { language: locale, document_type_id: document_type_id, size: size });
            return data.data
        },
        select(data) {
            return data
        },
    });
};
