import { IBaseResponse } from "@/app/[locale]/type";
import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

interface INavbarDocumentType {
    id: number;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: number;
    status: number;
    name: string;
    description: null | string;
}

export const useGetNavbarDocument = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: ['NavbarDocument'],
        queryFn: async () => {
            const { data } = await axiosInstance.post<IBaseResponse<INavbarDocumentType>>('/document-type/all', { language: locale });
            return data;
        },
        select(data) {
            return data
        },
    });
};
