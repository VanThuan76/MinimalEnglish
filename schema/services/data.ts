import { axiosInstance } from '@/lib/api'; 
import { useQuery } from '@tanstack/react-query';
interface IBaseResponse<T>{
    status_code: number;
    data: T;
    message: string;
}

interface IZone{
    id: number;
    branch: {
        id: number;
        name: string;
        address: string;
        status: number;
    };
    name: string;
    status: number;
}

export const useGeData = () => {
  return useQuery({
    queryKey: ['sectionData', 'en', 1],
    queryFn: () => axiosInstance.post<IBaseResponse<IZone[]>>('/section/get-by-page', {language: "en", page_id: 1}),
    select(data) {
      return data.data.map((item: IZone) => ({
        label: item.name,
        value: item.id,
      }));
    },
  });
};
