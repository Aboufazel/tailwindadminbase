import {DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import popupStore from "../../zustand/popupStore";
import Buttons from "../globals/Buttons";
import popupDataStore from "../../zustand/popupDataStore";
import {create} from "zustand";
import {editUserStatus} from "../../api/businessApi";
import {toast} from "react-toastify";

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
        {title:"وضعیت کسب و کار" , data:popupBody.status === 0 ? "غیر فعال" : "فعال"},
        {title:"نوع کدینگ" , data:popupBody.accountCodingKindName},
    ]

    const manageStatusEdit = async (data)=>{
        const res =await editUserStatus(data).catch(()=>{
            toast.error("ویرایش موفق نبود")
        })
        if (res.status === 200){
            toast.success("ویرایش با موفقیت انجام شد")
            manageActionStatus()
        }

    }

    const businessUserInfo = [
        {title:"مدیر کسب و کار" , data:popupBody.userName},
    ]
    return(
        <>
            <DialogHeader className={"flex flex-row items-center gap-[8px]"}>
                {"اطلاعات کسب و کار"}
            </DialogHeader>
            <DialogBody>
                <div className={"w-full px-3 py-2 rounded-[5px] font-bold bg-primary-main/10 text-text-color-1 text-[13px]"}>
                    {" اطلاعات "}
                </div>
                <ul className={"mt-5 px-5"}>
                    {
                        informationList.map((items , index) =>(
                            <li key={"business-list-info"+index} className={"flex flex-row items-center w-full justify-between mb-3"}>
                                <p>{items.title}</p>
                                <p className={"font-medium text-text-color-1"}>{items.data}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className={"w-full px-3 py-2 rounded-[5px] font-bold bg-primary-main/10 text-text-color-1 text-[13px]"}>
                    {" کاربران "}
                </div>
                <ul className={"mt-5 px-5"}>
                    {
                        businessUserInfo.map((items , index) =>(
                            <li key={"user-business-list-info"+index} className={"flex flex-row items-center font-normal w-full justify-between mb-3"}>
                                <p className={"w-1/2"}>{items.title}</p>
                                <div className={"flex flex-row items-center justify-end gap-3 w-1/2"}>
                                    <p className={"font-medium text-text-color-1"}>{items.data}</p>
                                    {
                                        actionStatus?
                                            "" :
                                            <Buttons light={true} onClick={manageActionStatus}>
                                                {popupBody.status === 0 ? "فعال سازی" : "غیر فعال سازی"}
                                            </Buttons>
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </DialogBody>
            <DialogFooter className={"flex flex-row w-full items-center gap-[10px]"}>
                {
                    actionStatus ?
                        <div className={"flex flex-row w-full items-center"}>
                            <p className={"w-2/3 text-primary-main font-normal"}>
                                {
                                    popupBody.status === 1 ?
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
                                        userId: popupBody.userId,
                                         status: popupBody.status === 0 ? 1 : 0
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