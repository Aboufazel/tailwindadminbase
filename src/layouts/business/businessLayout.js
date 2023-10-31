import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";
import {businessBreadCrumbsData, businessTableHead} from "../../data/businessLayoutData";

const BusinessLayout = () => {

    const users = [
        { id: 1, jobs: "ali", status: true },
        { id: 2, jobs: "saeed", status: false },
        { id: 1, jobs: "ali", status: true },
        { id: 2, jobs: "saeed", status: false },
        { id: 1, jobs: "ali", status: true },
        { id: 2, jobs: "saeed", status: false },
        { id: 1, jobs: "ali", status: true },
        { id: 2, jobs: "saeed", status: false },
        { id: 1, jobs: "ali", status: true },
        { id: 2, jobs: "saeed", status: false },
    ];

    return(
        <>
            <BreadCrumbs data={businessBreadCrumbsData}/>
            <Tables  headers={businessTableHead} data={users} bodyId={"business"}/>
        </>
    )
}

export default BusinessLayout;