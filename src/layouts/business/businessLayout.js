import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";

const BusinessLayout = () => {
 const breadCrumbsData = [
     {id:"business" , title:"داشبورد" , link:"/main"},
     {id:"business" , title:"کسب و کارها" , link:"#"},
 ]

    return(
        <div className={"w-full h-full shadow-cards p-[24px] rounded-[8px] bg-white"}>
            <BreadCrumbs data={breadCrumbsData}/>

            <Tables/>
        </div>
    )
}

export default BusinessLayout;