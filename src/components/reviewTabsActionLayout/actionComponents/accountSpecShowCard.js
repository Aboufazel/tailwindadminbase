import Buttons from "../../globals/Buttons";
import React, {useState} from "react";
import useAccountTypeStore from "../../../zustand/accountTypeStore";
import {CloseSquare, Delete} from "react-iconly";
import LoadingText from "../../loadingText/loadingText";
import {deleteAccountDetailTypeSubsidiary} from "../../../api/accountTypeApi";
import {toast} from "react-toastify";

const AccountSpecShowCard = ({data , refetch}) =>{
    const [loading , setLaoding] = useState(false)
    const specCardAction = useAccountTypeStore(state => state.specCardAction)
    const manageSpecCardAction = useAccountTypeStore(state => state.manageSpecCardAction)
    const updateAccountSubsidiaryId = useAccountTypeStore(state => state.updateAccountSpecId)
    const subsidiaryId = useAccountTypeStore(state => state.accountSpecId)

    const manageDeleteLink = async ()=>{
        setLaoding(true)
        const res = await deleteAccountDetailTypeSubsidiary(data.accountDetailTypeSubsidiaryId).catch(()=>{
            return(
                toast.error("حذف با مشکل مواجه شد!")
            )
        })
        if (res.status === 200){
            refetch()
            toast.success("لینک با موفقیت حذف شد!")
        }
        updateAccountSubsidiaryId()
        manageSpecCardAction()
        setLaoding(false)
    }

    return(
        <div className={"flex flex-row items-center w-full p-3 rounded-2xl my-5 border-primary-main/10 border pb-3"}>
            <div className={"w-1/2"}>
                <p className={'flex flex-row text-[14px] text-text-color-1 items-center gap-3'}>
                    {data.accountSubsidiaryName}
                    <span className={`${data.canDelete === 1 ? 'bg-red-500/10' : 'bg-primary-extraLight'} px-4 py-1 rounded-[3px] text-text-color-1`}>
                            {data.canDelete === 0 ? 'اختیاری' : 'اجباری'}
                        </span>
                </p>
                <p className={'text-[12px] text-text-color-2 mt-2'}>
                    {data.accountGroupName + ' / ' + data.accountGeneralName}
                </p>
            </div>
            <div className={"flex flex-row items-center gap-3 w-1/2 justify-end"}>
                {
                    (specCardAction && data.accountDetailTypeSubsidiaryId === subsidiaryId) ?
                        <div className={"flex flex-row items-center w-full"}>
                            <p className={"w-1/2"}>ایا از حذف اطمینان دارید؟!</p>
                            <div className={"flex flex-row items-center gap-3 justify-end w-1/2"}>
                                <Buttons onClick={manageSpecCardAction} light={true} rounded={true} icon={true}>
                                    <CloseSquare/>
                                </Buttons>
                                <Buttons onClick={manageDeleteLink} light={true} color={'danger'} rounded={true} icon={true}>
                                    {
                                        loading ?
                                            <LoadingText text={<Delete/>}/>
                                            :
                                            <Delete/>
                                    }
                                </Buttons>
                            </div>
                        </div>
                    :
                        <Buttons onClick={()=>{
                            manageSpecCardAction()
                            updateAccountSubsidiaryId(data.accountDetailTypeSubsidiaryId)
                        }} light={true} color={'danger'} rounded={true} icon={true}>
                            <Delete/>
                        </Buttons>
                }
            </div>
        </div>
    )
}

export default AccountSpecShowCard;