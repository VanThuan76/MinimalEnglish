import { axiosInstance } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"


export const useGetBrandStory = () => {
    const locale = useLocale ()
    return useQuery({
        queryKey: ['secitonBrandStory'],
        queryFn: () => axiosInstance.post<any>('/section/get-by-page', {language: locale, page_id: 2}),
        select(data){
            return data.data[2]            
        },
    })
    
}
