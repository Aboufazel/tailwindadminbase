import React from "react";
import {useSelectId} from "../../popupBody/definePopupBody/createAccountMain";

const SelectInput = ({data , error ,type= '' , register , step  , refetch , selectValue='حساب را انتخاب کنید...' ,...props}) => {
    const {updateAccountGroupId} = useSelectId()

    console.log(error , "select error")
    const SelectRevenueModelsForRevenuePlans =()=>{
        return(
            <div className={"flex flex-col mt-3"}>
                <label>{renderOptionLabel[type]}</label>
                <select {...props} required={true} className={"bg-transparent border border-text-color-3 px-3 py-2 rounded-[8px] mt-3"}
                        name={'revenueModelId'} id={'revenueModelId'} {...register("revenueModelId")}>
                    <option value={''}>{selectValue}</option>
                    {
                        data && data.map((items)=>(
                            <option
                                value={items.revenueModelId}
                            >{items.revenueModelName}</option>
                        ))
                    }
                </select>
            </div>
        )
    }

    const SelectCodingForRevenueModel =()=>{
        return(
            <div className={"flex flex-col mt-3"}>
                <label>{renderOptionLabel[type]}</label>
                <select {...props} required={true} className={"bg-transparent border border-text-color-3 px-3 py-2 rounded-[8px] mt-3"}
                        name={'accountCodingId'} id={'accountCodingId'} {...register("accountCodingId")}>
                    <option value={''}>{selectValue}</option>
                    {
                        data && data.map((items)=>(
                            <option
                                value={items.accountCodingKindId}
                            >{items.accountCodingKindName}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
    const SelectAccountGroupOptions = ()=>{
        return (
            <div className={"flex flex-col mt-3"}>
                <label>{renderOptionLabel[type]}</label>
                <select {...props} required={true} className={"bg-transparent border border-text-color-3 px-3 py-2 rounded-[8px] mt-3"}
                        name={'accountGroupId'} id={'accountGroupId'} {...register("accountGroupId")}>
                    <option value={''}>{selectValue}</option>
                    {
                        data && data.map((items)=>(
                            <option
                                onClick={()=> {
                                    updateAccountGroupId(items.accountGroupId)
                                    if(step === 'account-spec'){
                                        refetch()
                                    }
                                }}
                                value={items.accountGroupId}
                            >{items.accountGroupName}</option>
                        ))
                    }
                </select>
            </div>
        )
    }

    const SelectAccountMainOptions = ()=>{

        return (
            <div className={"flex flex-col mt-3"}>
                <label>{renderOptionLabel[type]}</label>
                <select required={true} className={"bg-transparent border border-text-color-3 px-3 py-2 rounded-[8px] mt-3"}
                        name={'accountMainId'} id={'accountMainId'} {...register("accountMainId")}>
                    <option value={''}>{selectValue}</option>
                    {
                        data && data.map((items)=>(
                            <option
                                value={items.accountMainId}
                            >{items.accountMainName}</option>
                        ))
                    }
                </select>
            </div>
        )
    }


    const renderOption = {
        'account-group':<SelectAccountGroupOptions/>,
        'account-main':<SelectAccountMainOptions/>,
        'all-account-coding':<SelectCodingForRevenueModel/>,
        'add-revenue-plans':<SelectRevenueModelsForRevenuePlans/>,
    }

    const renderOptionLabel = {
        'account-group':'گروه حساب',
        'account-main':'حساب کل',
        'all-account-coding':'کدینگ های موجود',
        'add-revenue-plans':'پلن های درآمدی',
    }


    return (
        <React.Fragment>
            <div className="flex w-72 flex-col gap-6">
                {renderOption[type]}
                {
                    (error) && <div className="text-danger-600 mt-1 w-full text-start mr-1 text-[12px]">{error}</div>
                }
            </div>
        </React.Fragment>
    )
}

export default SelectInput;