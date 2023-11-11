import React from "react";

const SelectInput = ({data , type= '' , label , register}) => {

    const SelectAccountGroupOptions = ()=>{

        return (
            <div className={"flex flex-col"}>
                <label>{label}</label>
                <select className={"bg-transparent border border-text-color-3 px-3 py-2 rounded-[8px] mt-3"}
                        name={'accountGroupId'} id={'accountGroupId'} {...register("accountGroupId")}>
                    {
                        data && data.map((items,index)=>(
                            <option
                                value={items.accountGroupId}
                            >{items.accountGroupName}</option>
                        ))
                    }
                </select>
            </div>
        )
    }


    const renderOption = {
        'account-group':<SelectAccountGroupOptions/>,
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