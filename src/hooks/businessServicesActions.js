import {useQuery} from "@tanstack/react-query";
import * as api from "../api/businessApi"
const useAllBusiness = (queryKey) => {
    return useQuery([queryKey] , api.getAllBusiness , {
        cacheTime:6*1000*60,
        enabled:false,
    });
}



export {
    useAllBusiness,
}