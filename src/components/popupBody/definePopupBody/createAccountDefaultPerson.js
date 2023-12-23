import {useAllAccountTypesByCoding} from "../../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../../loading/loadingComponents";
import useStore from "../../../zustand/store";
import CreateAccountPersonForm from "../createAccountPersonForm";
import useAccountPersonStore from "../../../zustand/accountPersonStore";

const CreateAccountDefaultPerson = () => {
    const accountCodingId = useStore(state => state.codingKindId)
    const showFormStatus = useAccountPersonStore(state => state.showFormStatus);
    const accountDetailTypeName = useAccountPersonStore(state => state.accountTypeName);
    const updateAccountTypeId = useAccountPersonStore(state => state.updatePersonAccountTypeId);
    const updateAccountTypeName = useAccountPersonStore(state => state.updateAccountTypeName);
    const manageShowFormStatus = useAccountPersonStore(state => state.manageShowFormStatus);

    const {data ,
        isError ,
        isLoading}  = useAllAccountTypesByCoding('accountDetailTypesById' , accountCodingId)

    if (isLoading){
        return (<LoadingComponents title={"در حال دریافت حساب های تفضیلی"}/> )
    }

    if (isError){
        return (toast.error('دریافت حساب تفضیلی با مشکل مواجه شد!'))
    }

    return(
        <div className={"flex flex-row items-center w-full"}>
            <ul className={"w-1/2"}>
                <p className={"font-bold text-[16px] dark:text-white text-text-color-2 mb-[20px]"}>لیست انواع حساب ها</p>
                {
                    data.data.accountDetailTypes.map((item , index)=>(
                        <li key={'account-spec-person-link' + index}
                            onClick={()=>{
                                manageShowFormStatus()
                                updateAccountTypeName(item.accountDetailTypeName)
                                updateAccountTypeId(item.accountDetailTypeId)
                            }}
                            className={`cursor-pointer 
                            transition-all 
                            duration-100 hover:font-bold
                            ${item.accountDetailTypeName === accountDetailTypeName ? "text-primary-main font-bold" : "dark:text-text-color-3 text-text-color-1 font-medium"} 
                            hover:text-primary-main my-4`}>
                            {item.accountDetailTypeName}
                        </li>
                    ))
                }
            </ul>
            {
                showFormStatus &&
                <div className={"w-1/2 dark:bg-dark-800 dark:border-none bg-primary-extraLight px-10 pb-10 rounded-[12px] border-[0.5px] border-primary-main mt-16"}>
                    <CreateAccountPersonForm/>
                </div>
            }

        </div>
    )
}

export default CreateAccountDefaultPerson;