import React, {useState} from "react";
import useReviewTabStore from "../../zustand/reviewTabStore";
import BackBtn from "./actionComponents/backBtn";
import {useGetAccountGroupById} from "../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../loading/loadingComponents";
import Buttons from "../globals/Buttons";
import useAccountGroupStore from "../../zustand/accountGroupStore";
import EditGroupForm from "./actionComponents/editGroupForm";
import {
    deleteAccountGroup,
} from "../../api/accountGroupApi";
import {Spinner} from "@material-tailwind/react";

const AccountGroupAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountGroupId = useReviewTabStore(state => state.codingAccountGroupId)
    const editGroupsStep = useAccountGroupStore(state => state.editGroupsStep)
    const deleteGroupStep = useAccountGroupStore(state => state.deleteGroupStep)
    const manageDeleteGroupStep = useAccountGroupStore(state => state.manageDeleteGroupStep)
    const manageEditGroupsStep = useAccountGroupStore(state => state.manageEditGroupStep)
    const [loading, setLoading] = useState(false);
    const {data , isLoading , isRefetching , isError} = useGetAccountGroupById('getAccountGroupWithId' ,  accountGroupId)

    if (isLoading || isRefetching){
        return (<LoadingComponents title={'دریافت گروه حساب'}/> )
    }

    const accountGroupInformationList = [
        {title:"نام حساب" , data:data?.data.accountGroups[0].accountGroupName},
        {title:"کد حساب" , data:data?.data.accountGroups[0].accountGroupCode},
        {title:"وضعیت" , data:data?.data.accountGroups[0].isActive ? 'فعال' : 'غیر فعال'},
    ]

    if(isError){
        return (toast.error('دربافت با مشکل مواجه شد!'))
    }


    const manageDeleteGroupAccount = async ()=>{
        setLoading(true)
        const res = await deleteAccountGroup(accountGroupId).catch((e)=>{
            manageDeleteGroupStep()
            if(e.response.status === 403){
                return (toast.error("به دلیل وجود حساب کل امکان حذف وجود ندارد!"))
            } else if(e.response.status > 403 || e.response.status <= 500){
                return (toast.error('خطا در ارتباط با سرور!'))
            }
        })
        if (res.status===200){
            manageDeleteGroupStep()
            return(toast.success('حذف موفقیت آمیز بود'))
        }
        setLoading(false)
    }

    return(
        <div className={"relative w-full"}>
            {
                !editGroupsStep ?
                    <>
                        <BackBtn onClick={manageActionLayout}/>
                        <div className={"flex flex-col pt-8"}>
                            <p className={"text-center mb-3 text-text-color-1 text-[16px] font-bold"}>{data.data.accountGroups[0].accountGroupName}</p>
                        </div>
                        <div className={"bg-primary-extraLight font-medium text-text-color-1 w-full p-2"}>
                            {'اطلاعات'}
                        </div>
                        <ul className={"mt-5 px-5"}>
                            {
                                accountGroupInformationList.map((items, index) => (
                                    <li key={"accountGroup-list-info" + index}
                                        className={"flex flex-row items-center w-full justify-between mb-3"}>
                                        <p>{items?.title}</p>
                                        <p className={"font-medium text-text-color-1"}>{items?.data}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={"flex flex-row justify-center mt-3 items-center gap-3"}>
                            {
                                !deleteGroupStep ?
                                    <>
                                        <Buttons onClick={manageEditGroupsStep} light={true}>ویرایش</Buttons>
                                        <Buttons onClick={manageDeleteGroupStep} light={true}>حذف</Buttons>
                                    </> :
                                    <div className={"w-full px-3 mt-3"}>
                                        <p className={"text-danger-600 font-medium text-[14px]"}>
                                            آیا گروه حساب را حذف می‌‌کنید؟
                                        </p>
                                        <p className={"text-text-color-2 mt-2"}>
                                            با حذف کردن گروه حساب دیگر کسب و کار ها به آن دسترسی ندارند
                                        </p>
                                        <div className={"flex flex-row justify-end gap-3 items-center"}>
                                            <Buttons onClick={manageDeleteGroupStep} light={true}>{"انصراف"}</Buttons>
                                            <Buttons onClick={manageDeleteGroupAccount} color={"danger"}
                                                     light={true}>
                                                {
                                                    loading ?
                                                        <p className={"flex flex-row items-center justify-center gap-3"}>
                                                            <Spinner/>
                                                            {"تایید"}
                                                        </p>
                                                        : "تایید"
                                                }
                                            </Buttons>
                                        </div>
                                    </div>
                            }
                        </div>
                    </> :
                    <div className={'w-full relative'}>
                        <BackBtn onClick={manageEditGroupsStep}/>
                        <EditGroupForm data={data}/>
                    </div>
            }
        </div>
    )
}

export default AccountGroupAction;