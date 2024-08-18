import { axiosInstance } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"


export const useGetBrandStory2 = () => {
    const locale = useLocale ()
    return useQuery({
        queryKey: ['secitonBrandStory2'],
        queryFn: () => axiosInstance.post<any>('/component/get-by-section', {language: locale, section_id: 6}),
        select(data){
            return data.data           
        },
    })
    
}
