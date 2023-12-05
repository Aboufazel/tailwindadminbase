import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";
import {businessBreadCrumbsData, businessTableHead} from "../../data/businessLayoutData";
import {useAllBusiness} from "../../hooks/businessServicesActions";
import {toast} from "react-toastify";
import useStorage from "../../hooks/useStorage";
import {useNavigate} from "react-router-dom";
import Storage from "../../services/storage";
import LoadingComponents from "../../components/loading/loadingComponents";
import {routes} from "../../data/routes";

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
                <LoadingComponents title={'در حال دریافت کسب و کار...'}/>
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
                        navigate(routes.login)
                    } else if (storage.accessToken && error?.response.status === 403){
                        toast.error("توکن منقضی شده است")
                        setAuthInfo({
                            userId: "",
                            accessToken: "",
                            role:"",
                        })
                        navigate(routes.login)
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