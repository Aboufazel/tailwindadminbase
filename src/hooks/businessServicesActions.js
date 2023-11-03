import {useQuery, useMutation} from "@tanstack/react-query";
import {queryCache } from "react-query"
import {editUserStatus, getAllBusiness} from "../api/businessApi";
import {toast} from "react-toastify";
const useAllBusiness = (queryKey) => {
    return useQuery({
        queryKey:[queryKey],
        queryFn:getAllBusiness,
    });
}

const useUpdateBusinessStatus = (data) => {
    return useMutation(editUserStatus(data), {
        onSuccess: () => {
            queryCache.refetchQueries("business")
            toast.success("salam")
        },
    })
}


export {
    useAllBusiness,
    useUpdateBusinessStatus,
}