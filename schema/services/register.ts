import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/api';
import { Class_Detail, IBaseResponse } from '@/app/[locale]/type';

export const useGetClassData = (class_id: string) => {
  return useQuery({
    queryKey: ['classDetail'],
    queryFn: () => axiosInstance.post<IBaseResponse<Class_Detail[]>>('/class/get-by-id', {language: "en", id: class_id}),
    select(data) {
      return data.data[0]
    },
  });
};
