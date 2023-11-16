import {deleteCoding} from "../../../api/codingKind";
import {toast} from "react-toastify";
import Buttons from "../../globals/Buttons";
import React from "react";
import popupStore from "../../../zustand/popupStore";
import useStore from "../../../zustand/store";

const DeleteCoding = () => {
    const managePopup = popupStore(state => state.manageOpenPopUp);
    const accountCodingKindId = useStore(state => state.codingKindId)
    const manageDeleteCoding = async ()=>{
        managePopup()
        const res = await deleteCoding(accountCodingKindId).catch(()=>{
            return(toast.error('حذف موفقیت آمیز نبود!'))
        })
        if (res.status === 200){
            return (toast.success('حذف کدینگ با موفقیت انجام شد'))
        }
    }

    return(
        <div className={"py-5"}>
            <p className={"text-danger-600 font-medium text-center text-[18px]"}>آیا کدینگ را حذف می‌‌کنید؟</p>
            <div className={"flex flex-row items-center justify-center gap-3 mt-5 w-full"}>
                <Buttons onClick={managePopup} light={true}>{"انصراف"}</Buttons>
                <Buttons onClick={manageDeleteCoding} color={"danger"}
                         light={true}>{"تایید"}</Buttons>
            </div>
        </div>
    )
}

export default DeleteCoding;