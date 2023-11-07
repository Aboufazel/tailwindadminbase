import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";
import {businessBreadCrumbsData, businessTableHead} from "../../data/businessLayoutData";
import {Spinner} from "@material-tailwind/react";
import {useAllBusiness} from "../../hooks/businessServicesActions";
import {useEffect} from "react";
import {toast} from "react-toastify";
import useStorage from "../../hooks/useStorage";
import {useNavigate} from "react-router-dom";
import Storage from "../../services/storage";

const BusinessLayout = () => {
    const [,setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
        role:""
    })
    const storage = Storage()
    const navigate = useNavigate()
    const {isLoading, isError, data , error} = useAllBusiness("business")

    if(isLoading){
        return (
            <>
                <BreadCrumbs data={businessBreadCrumbsData}/>
                <div className={"flex items-center gap-3 mt-7"}>
                    <Spinner color={"blue"}/>
                    <p className={"text-text-color-2 font-medium"}>در حال دریافت اطلاعات...</p>
                </div>
            </>
        )
    }

    if(isError){
        if(storage.accessToken && error?.response.status >=400 && error?.response.status <=500){
                        toast.error("توکن منقضی شده است")
                        setAuthInfo({
                            userId: "",
                            accessToken: "",
                            role:"",
                        })
                        navigate('/')
                    } else if (storage.accessToken && error?.response.status === 403){
                        toast.error("توکن منقضی شده است")
                        setAuthInfo({
                            userId: "",
                            accessToken: "",
                            role:"",
                        })
                        navigate('/')
                    }
        return (
            <>
                <BreadCrumbs data={businessBreadCrumbsData}/>
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