import {useAllAccountTypesByCoding} from "../../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../../loading/loadingComponents";
import useStore from "../../../zustand/store";
import CreateAccountPersonForm from "../createAccountPersonForm";
import useAccountPersonStore from "../../../zustand/accountPersonStore";

const CreateAccountDefaultPerson = () => {
    const accountCodingId = useStore(state => state.codingKindId)
    const showFormStatus = useAccountPersonStore(state => state.showFormStatus);
    const accountTypeName = useAccountPersonStore(state => state.accountTypeName);
    const updateAccountTypeId = useAccountPersonStore(state => state.updatePersonAccountTypeId);
    const updateAccountTypeName = useAccountPersonStore(state => state.updateAccountTypeName);
    const manageShowFormStatus = useAccountPersonStore(state => state.manageShowFormStatus);

    const {data ,
        isError ,
        isLoading ,
        isRefetching}  = useAllAccountTypesByCoding('accountTypesById' , accountCodingId)

    if (isLoading || isRefetching){
        return (<LoadingComponents title={"در حال دریافت حساب های تفضیلی"}/> )
    }

    if (isError){
        return (toast.error('دریافت حساب تفضیلی با مشکل مواجه شد!'))
    }

    return(
        <div className={"flex flex-row items-center w-full"}>
            <ul className={"w-1/2"}>
                <p className={"font-bold text-[16px] text-text-color-2 mb-[20px]"}>لیست انواع حساب ها</p>
                {
                    data.data.accountTypes.map((item , index)=>(
                        <li key={'account-spec-person-link' + index}
                            onClick={()=>{
                                manageShowFormStatus()
                                updateAccountTypeName(item.accountTypeName)
                                updateAccountTypeId(item.accountTypeId)
                            }}
                            className={`cursor-pointer 
                            transition-all 
                            duration-150 hover:font-bold
                            ${item.accountTypeName === accountTypeName ? "text-primary-main font-bold" : "text-text-color-1 font-medium"} 
                            hover:text-primary-main my-4`}>
                            {item.accountTypeName}
                        </li>
                    ))
                }
            </ul>
            <div className={"w-1/2"}>
                {
                    showFormStatus &&
                    <CreateAccountPersonForm/>
                }
            </div>
        </div>
    )
}

export default CreateAccountDefaultPerson;