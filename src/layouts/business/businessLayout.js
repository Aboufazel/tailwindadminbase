import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";
import {businessBreadCrumbsData, businessTableHead} from "../../data/businessLayoutData";
import {getAllBusiness} from "../../api/businessApi";
import {useEffect, useState} from "react";

const BusinessLayout = () => {
    const [user , setUser] = useState([])
    const getAll = async ()=>{
        const res = await getAllBusiness();
        setUser(res.data.businesses)
    }

    useEffect(() => {
        getAll()
    }, []);

    return(
            <>
                <BreadCrumbs data={businessBreadCrumbsData}/>
                <Tables  headers={businessTableHead} bodyId={"business"} data={user}/>
            </>
    )
}

export default BusinessLayout;