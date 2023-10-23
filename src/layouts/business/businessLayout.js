import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";

const BusinessLayout = () => {
 const breadCrumbsData = [
     {id:"business" , title:"داشبورد" , link:"/main"},
     {id:"business" , title:"کسب و کارها" , link:"#"},
 ]

    return(
        <div className={"w-full"}>
            <div className={"w-full mt-[40px] px-[40px]"}>
                <div className={"w-full h-full shadow-cards p-[24px] rounded-[8px] bg-white"}>
                    <BreadCrumbs data={breadCrumbsData}/>
                </div>
            </div>
        </div>
    )
}

export default BusinessLayout;