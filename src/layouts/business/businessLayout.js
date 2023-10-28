import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";
import {businessBreadCrumbsData, businessTableHead} from "../../data/businessLayoutData";

const BusinessLayout = () => {

    const users = [
        { id: 1, username: "ali", email: "akpa125@gmail.com", isAdmin: true },
        { id: 2, username: "saeed", email: "saeed@yahoo.com", isAdmin: false },
    ];

    return(
        <>
            <BreadCrumbs data={businessBreadCrumbsData}/>
            <Tables  headers={businessTableHead} data={users} bodyId={"business"}/>
        </>
    )
}

export default BusinessLayout;