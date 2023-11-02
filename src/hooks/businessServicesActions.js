import {useQuery} from "@tanstack/react-query";
import {getAllBusiness} from "../api/businessApi";
const useAllBusiness = (queryKey) => {
    return useQuery({
        queryKey:[queryKey],
        queryFn:getAllBusiness,
    });
}



export {
    useAllBusiness,
}