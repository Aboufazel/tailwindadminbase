import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";

const Admin = () => {

    return(
        <div className={"w-full"}>
            <div className={"w-full mt-[40px] px-[40px]"}>
                <div className={"w-full h-full shadow-cards p-[24px] rounded-[8px] bg-white"}>
                    <BreadCrumbs data={[{id:"dashboard" , title:"داشبورد" , link:"#"}]}/>
                </div>
            </div>
        </div>
    )
}


export default Admin;