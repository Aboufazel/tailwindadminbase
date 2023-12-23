import Buttons from "../../globals/Buttons";
import React, {useState} from "react";
import useAccountTypeStore from "../../../zustand/accountTypeStore";
import {CloseSquare, Delete, Edit} from "react-iconly";
import LoadingText from "../../loadingText/loadingText";
import {deleteAccountDetailTypeSubsidiary, editAccountDetailTypeSubsidiary} from "../../../api/accountDetailTypeApi";
import {toast} from "react-toastify";
import {
    deleteNewLinkForAccountDetailDefaultSubsidiary,
    editNewLinkForAccountDetailDefaultSubsidiary
} from "../../../api/accountDetailDefaultsApi";
import formStore from "../../../zustand/formStore";

const AccountSpecShowCard = ({data , refetch , step='account-detail-type'}) =>{
    const [loading , setLaoding] = useState(false)
    const specCardAction = useAccountTypeStore(state => state.specCardAction)
    const manageSpecCardAction = useAccountTypeStore(state => state.manageSpecCardAction)
    const updateAccountSubsidiaryId = useAccountTypeStore(state => state.updateAccountSpecId)
    const subsidiaryId = useAccountTypeStore(state => state.accountSpecId)
    const editLinkAction = useAccountTypeStore(state => state.editLinkAction)
    const canDeleteButton = formStore(state => state.canDeleteButton)
    const manageEditLinkAction = useAccountTypeStore(state => state.manageEditLinkAction)
    const canDeleteData = useAccountTypeStore(state => state.canDeleteData)
    const updateCanDeleteData = useAccountTypeStore(state => state.updateCanDeleteData)
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


    const manageDeleteDefaultLink = async ()=>{
        setLaoding(true)
        const res = await deleteNewLinkForAccountDetailDefaultSubsidiary(data.accountDetailDefaultLinkId).catch((e)=>{
            return(
                toast.error(e.response.data.value.message)
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


    console.log(data , "subsidiary link data")

    const editAccountDetailTypeLink = async ()=>{
        setLaoding(true)
        const res = await editAccountDetailTypeSubsidiary(
            `${data.accountDetailTypeSubsidiaryId}` ,
            `${data.accountDetailTypeId}` ,
            `${data.accountSubsidiaryId}` ,
            `${canDeleteData}` ).catch((e)=>{
            return(
                toast.error(e.response.data.value.message)
            )
        })
        if (res.status === 200){
            refetch()
            toast.success("لینک با موفقیت ویرایش شد!")
        }
        updateAccountSubsidiaryId()
        manageEditLinkAction()
        updateCanDeleteData()
        setLaoding(false)
    }

    const editAccountDetailDefaultLink = async ()=>{
        setLaoding(true)
        const res = await editNewLinkForAccountDetailDefaultSubsidiary(
            `${data.accountDetailDefaultLinkId}` ,
            `${data.accountDetailDefaultId}` ,
            `${data.accountSubsidiaryId}` ,
            `${canDeleteData}` ).catch((e)=>{
            return(
                toast.error(e.response.data.value.message)
            )
        })
        if (res.status === 200){
            refetch()
            toast.success("لینک با موفقیت ویرایش شد!")
        }
        updateAccountSubsidiaryId()
        manageEditLinkAction()
        updateCanDeleteData()
        setLaoding(false)
    }

    const deleteLinkFunction = {
        'account-detail-type' : manageDeleteLink,
        'account-detail-default-link' : manageDeleteDefaultLink,
    }

    const editLinkFunction = {
        'account-detail-type' : editAccountDetailTypeLink,
        'account-detail-default-link' : editAccountDetailDefaultLink,
    }

    return(
        <div className={"flex flex-row items-center w-full p-3 rounded-2xl my-2 border-primary-main/10 border pb-3"}>
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
                                <Buttons onClick={deleteLinkFunction[step]} light={true} color={'danger'} rounded={true} icon={true}>
                                    {
                                        loading ?
                                            <LoadingText text={<Delete/>}/>
                                            :
                                            <Delete/>
                                    }
                                </Buttons>
                            </div>
                        </div>
                    : (editLinkAction && data.accountDetailTypeSubsidiaryId === subsidiaryId) ?

                            <div className={"flex flex-row items-center w-full"}>
                                <div className={"flex flex-row items-center gap-3 justify-start w-1/2"}>
                                    {
                                        canDeleteButton.map((items, index) => (
                                            <div key={items.id + index} onClick={() => updateCanDeleteData(items.value)}
                                                 className={`cursor-pointer 
                                     ${canDeleteData === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                                      w-[135px] py-2 rounded-[8px] text-center border`}>
                                                {items.title}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={"flex flex-row items-center gap-3 justify-end w-1/2"}>
                                    <Buttons onClick={manageEditLinkAction} light={true} rounded={true} icon={true}>
                                        <CloseSquare/>
                                    </Buttons>
                                    <Buttons onClick={editLinkFunction[step]} light={true} color={'warning'} rounded={true} icon={true}>
                                        {
                                            loading ?
                                                <LoadingText text={<Edit/>}/>
                                                :
                                                <Edit/>
                                        }
                                    </Buttons>
                                </div>
                            </div>


                       : <div className={'flex flex-row items-center gap-3'}>
                            <Buttons onClick={()=>{
                                manageEditLinkAction()
                                updateAccountSubsidiaryId(data.accountDetailTypeSubsidiaryId)
                            }} light={true} color={'warning'} rounded={true} icon={true}>
                                <Edit/>
                            </Buttons>
                            <Buttons onClick={()=>{
                                manageSpecCardAction()
                                updateAccountSubsidiaryId(data.accountDetailTypeSubsidiaryId)
                            }} light={true} color={'danger'} rounded={true} icon={true}>
                                <Delete/>
                            </Buttons>
                        </div>
                }
            </div>
        </div>
    )
}

export default AccountSpecShowCard;