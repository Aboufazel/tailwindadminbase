import React from "react";
import {useSelectId} from "../../popupBody/definePopupBody/createAccountGeneral";

const SelectInput = ({data , error ,type= '' , register , step  , refetch , selectValue='حساب را انتخاب کنید...' ,...props}) => {
    const {updateAccountGroupId} = useSelectId()



    const SelectRevenuePlansForRevenuePrices =()=>{
        return(
            <div className={"flex flex-col mt-3"}>
                <label>{renderOptionLabel[type]}</label>
                <select {...props} required={true} className={"bg-transparent border border-text-color-3 px-3 py-2 rounded-[8px] mt-3"}
                        name={'revenuePlanId'} id={'revenuePlanId'} {...register("revenuePlanId")}>
                    <option value={''}>{selectValue}</option>
                    {
                        data && data.map((items)=>(
                            <option
                                value={items.revenuePlanId}
                            >{items.revenuePlanName}</option>
                        ))
                    }
                </select>
            </div>
        )
    }

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

    const SelectAccountGeneralOptions = ()=>{

        return (
            <div className={"flex flex-col mt-3"}>
                <label>{renderOptionLabel[type]}</label>
                <select required={true} className={"bg-transparent border border-text-color-3 px-3 py-2 rounded-[8px] mt-3"}
                        name={'accountGeneralId'} id={'accountGeneralId'} {...register("accountGeneralId")}>
                    <option value={''}>{selectValue}</option>
                    {
                        data && data.map((items)=>(
                            <option
                                value={items.accountGeneralId}
                            >{items.accountGeneralName}</option>
                        ))
                    }
                </select>
            </div>
        )
    }


    const renderOption = {
        'account-group':<SelectAccountGroupOptions/>,
        'account-general':<SelectAccountGeneralOptions/>,
        'all-account-coding':<SelectCodingForRevenueModel/>,
        'add-revenue-plans':<SelectRevenueModelsForRevenuePlans/>,
        'all-revenue-plans':<SelectRevenuePlansForRevenuePrices/>,
    }

    const renderOptionLabel = {
        'account-group':'گروه حساب',
        'account-general':'حساب کل',
        'all-account-coding':'کدینگ های موجود',
        'add-revenue-plans':'مدل های درآمدی',
        'all-revenue-plans':'پلن های درآمدی',
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