import { axiosInstance } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"


export const useGetVision = () => {
    const locale = useLocale ()
    return useQuery({
        queryKey: ['secitonVision'],
        queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: 2}),
        select(data){
            return data.data[1]
            
        },
    })
}