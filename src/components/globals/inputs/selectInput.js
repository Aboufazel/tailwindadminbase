import React from "react";
import {useSelectId} from "../../popupBody/definePopupBody/createAccountMain";

const SelectInput = ({data , type= '' , register , step  , refetch , selectValue='گروه حساب را انتخاب کنید...' ,...props}) => {
    const {updateAccountGroupId} = useSelectId()

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
                    <option value={''}>{'حساب کل را انتخاب کنید...'}</option>
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
    }

    const renderOptionLabel = {
        'account-group':'گروه حساب',
        'account-main':'حساب کل',
    }


    return (
        <React.Fragment>
            <div className="flex w-72 flex-col gap-6">
                {renderOption[type]}
            </div>
        </React.Fragment>
    )
}

export default SelectInput;