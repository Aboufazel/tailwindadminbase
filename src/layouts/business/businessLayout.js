import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";

const BusinessLayout = () => {
 const breadCrumbsData = [
     {id:"business" , title:"داشبورد" , link:"/main"},
     {id:"business" , title:"کسب و کارها" , link:"#"},
 ]

    return(
        <>
            <BreadCrumbs data={breadCrumbsData}/>

            <Tables/>
        </>
    )
}

export default BusinessLayout;