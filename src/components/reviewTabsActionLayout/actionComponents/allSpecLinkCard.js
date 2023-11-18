import useAccountTypeStore from "../../../zustand/accountTypeStore";

const AllSpecLinkCard = ({data}) => {

    const updatecanDeleteData = useAccountTypeStore(state => state.updateCanDeleteData)
    const updateAccountSpecId = useAccountTypeStore(state => state.updateAccountSpecId)
    const manageCanDeleteStep = useAccountTypeStore(state => state.manageCanDeleteStep)
    return(
        <div onClick={()=>{
            manageCanDeleteStep()
            updatecanDeleteData()
            updateAccountSpecId(data.accountSpecId)
        }}  className={"flex flex-row cursor-pointer items-center w-full border-b border-text-color-2/20 py-3"}>
            <div className={"w-1/2"}>
                <p className={"text-text-color-1 font-medium"}>{data?.accountSpecName}</p>
                <div className={"flex flex-row text-text-color-2 mt-2 items-center w-full"}>
                    {data?.accountGroupName + ' / ' + data?.accountMainName}
                </div>
            </div>
            <div className={"w-1/2 text-end text-text-color-2"}>
                <p className={"text-text-color-1 font-medium mb-2"}>کد حساب</p>
                {data?.accountSpecCode}
            </div>
        </div>
    )
}

export default AllSpecLinkCard;