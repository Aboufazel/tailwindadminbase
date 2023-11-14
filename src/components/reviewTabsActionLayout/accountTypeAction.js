import useReviewTabStore from "../../zustand/reviewTabStore";
import {ArrowLeft} from "react-iconly";
import Buttons from "../globals/Buttons";
import useAccountTypeStore from "../../zustand/accountTypeStore";
import {useAllAccountSpecByTypeId} from "../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../loading/loadingComponents";

const AccountTypeAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountTypeId = useAccountTypeStore(state => state.accountTypeId)
    const accountTypeInformationList = [
        {title:"نام حساب" , data:'نوع حساب'},
        {title:"کد حساب" , data:'کد حساب'},
        {title:"نوع شناوری" , data:'شناور/غیر شناور'},
        {title:"وضعیت" , data:'فعال / غیرفعال'},
        {title:"نوع" , data:'اتوماتیک / غیر اتوماتیک'},
    ]

    const {data , isRefetching , isLoading , isError} = useAllAccountSpecByTypeId('accountSpecsByTypeId' , accountTypeId)


    console.log(data , 'account spec by type data')

    if(isError){
        toast.error('دریافت اطلاعات با مشکل مواجه شد!')
    }
    const AccountSpecShowCard = () =>{

        if(isLoading || isRefetching){
            return (<LoadingComponents title={'درحال دریافت حساب معین'}/>
        )
        }

        return(
            <div className={"flex flex-row items-center w-full my-5 border-primary-main/10 border-b pb-3"}>
                <div className={"w-1/2"}>
                    <p className={'flex flex-row text-[14px] text-text-color-1 items-center gap-3'}>
                        {'نام حساب معین'}
                        <span className={'bg-red-500/10 px-4 py-1 rounded-[3px] text-text-color-1'}>
                            {'اجباری'}
                        </span>
                    </p>
                    <p className={'text-[12px] text-text-color-2 mt-2'}>آدرس حساب</p>
                </div>
                <div className={"flex flex-row items-center gap-3 w-full justify-end"}>
                    <Buttons light={true} color={'danger'}>حذف</Buttons>
                    <Buttons light={true} color={'warning'}>ویرایش</Buttons>
                </div>
            </div>
        )
    }


    return(
        <div className={"relative w-full"}>
            <div
                onClick={manageActionLayout}
                className={`flex flex-row items-center 
                        hover:bg-primary-main hover:text-white 
                        absolute left-0
                        justify-center rounded-[5px] 
                        cursor-pointer bg-primary-extraLight  max-w-max px-[12px] gap-3 h-[35px]`}>
                <p>بازگشت</p>
                <ArrowLeft set={"bulk"}/>
            </div>
            <div className={"flex flex-col pt-14"}>
                <div className={'w-full'}>
                    <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                        اطلاعات
                    </div>
                    <ul className={"mt-5 px-5"}>
                        {
                            accountTypeInformationList.map((items , index) =>(
                                <li key={"accountType-list-info"+index} className={"flex flex-row items-center w-full justify-between mb-3"}>
                                    <p>{items?.title}</p>
                                    <p className={"font-medium text-text-color-1"}>{items?.data}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className={'w-full mt-6'}>
                    <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                        لینک های معین
                    </div>
                    <div className={'h-[100px] overflow-y-auto '}>
                        <AccountSpecShowCard/>
                    </div>
                </div>

                <div className={"flex flex-row items-center w-full justify-center mt-8 gap-5"}>
                    <Buttons light={true}>لینک جدید</Buttons>
                    <Buttons light={true}>ویرایش</Buttons>
                    <Buttons light={true}>حذف</Buttons>
                    <Buttons light={true}>غیرفعال سازی</Buttons>
                </div>
            </div>
        </div>
    )
}


export default AccountTypeAction;