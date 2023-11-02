import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";
import {businessBreadCrumbsData, businessTableHead} from "../../data/businessLayoutData";
import {getAllBusiness} from "../../api/businessApi";
import {useEffect, useState} from "react";
import {useAllBusiness} from "../../hooks/businessServicesActions";
import {useQuery} from "@tanstack/react-query";
import {Spinner} from "@material-tailwind/react";

const BusinessLayout = () => {

    const { isLoading, isError, data , error } = useQuery({
        queryKey: ['business'],
        queryFn: getAllBusiness,
        cacheTime:5*60*1000,
        enabled:true,
        refetchIntervalInBackground:false,
    })

    if(isLoading){
        return (
            <>
                <BreadCrumbs data={businessBreadCrumbsData}/>
                <div className={"flex items-center gap-3 mt-7"}>
                    <Spinner/>
                    <p className={"text-text-color-2 font-medium"}>در حال دریافت اطلاعات...</p>
                </div>
            </>
        )
    }

    if(isError){
        return (
            <>
                <BreadCrumbs data={businessBreadCrumbsData}/>
                <p>{error}</p>
            </>
        )
    }

    return(
            <>
                <BreadCrumbs data={businessBreadCrumbsData}/>
                <Tables  headers={businessTableHead} bodyId={"business"} data={data.data.businesses}/>
            </>
    )
}

export default BusinessLayout;