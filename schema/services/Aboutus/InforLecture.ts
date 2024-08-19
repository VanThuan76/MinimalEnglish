import { axiosInstance } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"


export const useGetInforLecture = () => {
    const locale = useLocale ()
    return useQuery({
        queryKey: ['secitonInforLecture'],
        queryFn: () => axiosInstance.post<any>('/component/get-by-section', {language: locale, section_id: 12}),
        select(data){
            return data.data        
        },
    })    
}

