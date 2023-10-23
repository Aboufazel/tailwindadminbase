import * as api from "../api/dashboardApi"
import {useQuery} from "@tanstack/react-query";



const useAllData = (queryKey) => {
  return useQuery([queryKey] , api.UserLists , {
      cacheTime:6*1000*60,
  });
}

const useDetailData = (queryKey , id) =>{
    return useQuery([queryKey] , ()=>api.UserDetail(id))
}


export {
    useAllData,
    useDetailData,
}