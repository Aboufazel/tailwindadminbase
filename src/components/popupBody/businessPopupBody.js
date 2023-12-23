import {DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import popupStore from "../../zustand/popupStore";
import Buttons from "../globals/Buttons";
import popupDataStore from "../../zustand/popupDataStore";
import {create} from "zustand";
import {activeBusiness, deActiveBusiness} from "../../api/businessApi";
import {useAllBusiness} from "../../hooks/businessServicesActions";
import ShowDetailComponents from "../showDetailComponents/showDetailComponents";
import {activeFunction, deActiveFunction} from "../../hooks/globalFunction";

const useState = create((set)=>({
    actionStatus:false,
    manageActionStatus:()=>set((state)=>({actionStatus:state.actionStatus !== true})),
}))
const BusinessPopupBody = () => {
    const managePopup = popupStore(state => state.manageOpenPopUp);
    const popupBody = popupDataStore(state => state.popupBodyData);
    const { actionStatus, manageActionStatus } = useState()
    const informationList = [
        {title:"نام" , data:popupBody.businessName},
        {title:"شناسه کسب و کار" , data:popupBody.businessId},
        {title:"شناسه یکتا" , data:popupBody.uniqueName},
        {title:"وضعیت کسب و کار" , data:popupBody.status === 0 ? "غیر فعال" : "فعال"},
        {title:"نوع کدینگ" , data:popupBody.accountCodingKindName},
    ]


    const {refetch} = useAllBusiness('business')
    const manageStatusEdit = async ()=>{
        if (popupBody.isActive === 1){
            deActiveFunction(deActiveBusiness , popupBody.businessId).then()
            refetch()
        }
        else if(popupBody.isActive === 0){
            activeFunction(activeBusiness , popupBody.businessId).then()
            refetch()
        }
        manageActionStatus()
    }

    return(
        <>
            <DialogHeader className={"flex flex-row items-center gap-[8px]"}>
                {"اطلاعات کسب و کار"}
            </DialogHeader>
            <DialogBody>
                <ShowDetailComponents data={informationList} cls={""}/>
                <div className={"flex flex-row items-center justify-end gap-3 w-full"}>
                    {
                        actionStatus?
                            "" :
                            <Buttons light={true} onClick={manageActionStatus}>
                                {popupBody?.isActive === 0 ? "فعال سازی" : "غیر فعال سازی"}
                            </Buttons>
                    }
                </div>
            </DialogBody>
            <DialogFooter className={"flex flex-row w-full items-center gap-[10px]"}>
                {
                    actionStatus ?
                        <div className={"flex flex-row w-full items-center"}>
                            <p className={"w-2/3 text-primary-main font-normal"}>
                                {
                                    popupBody?.status === 1 ?
                                        "با غیرفعال کردن کسب و کار دسترسی کاربران کسب و کار به آن مسدود میشود و نمیتوانند از کسب و کار استفاده کنند"
                                        :
                                        "با فعال کردن کسب و کار دوباره کاربران آن به کسب و کار دسترسی پیدا میکنند"
                                }
                            </p>
                            <div className={"flex flex-row justify-end items-center w-1/3"}>
                                <Buttons color={"danger"} light={true} cls={"mr-5"} onClick={manageActionStatus}>{"انصراف"}</Buttons>
                                <Buttons color={"success"} cls={"mr-5"} onClick={()=> {
                                    managePopup()
                                    manageStatusEdit({
                                        userId: popupBody?.userId,
                                         status: popupBody?.status === 0 ? 1 : 0
                                    }).then()
                                }}>{"تایید"}</Buttons>
                            </div>
                        </div>
                        :
                        ""
                }
            </DialogFooter>
        </>
    )
}

export default BusinessPopupBody;