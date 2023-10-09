import * as api from "../api/dashboardApi"
import {useQuery} from "@tanstack/react-query";



const useAllData = (queryKey) => {
  return useQuery([queryKey] , api.UserLists);
}


const useDetailData = (queryKey , id) =>{
    return useQuery([queryKey] , ()=>api.UserDetail(id))
}



export {
    useAllData,
    useDetailData,
}