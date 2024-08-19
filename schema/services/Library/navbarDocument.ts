import { axiosInstance } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"


interface Section {
    id: number;
    created_at: string;
    updated_at: string;
    order: number;
    status: number;
    name: string;
    description: string | null;
    image: string;
  }

export const useGetNavbarDocument = () => {
    const locale = useLocale ()
    return useQuery({
        queryKey: ['NavbarDocument'],
        queryFn: () => axiosInstance.post<{ statusCode: number; data: Section[] }>('/document-type/all', {language: locale}),
        select(data){
            return data.data        
        },
    })    
}

