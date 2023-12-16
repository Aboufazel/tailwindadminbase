import useAccountTypeStore from "../../../zustand/accountTypeStore";

const AllSpecLinkCard = ({data}) => {
    const subsidiaryId = useAccountTypeStore(state => state.accountSpecId)
    const updateCanDeleteData = useAccountTypeStore(state => state.updateCanDeleteData)
    const updateAccountSubsidiaryId = useAccountTypeStore(state => state.updateAccountSpecId)
    const manageCanDeleteStep = useAccountTypeStore(state => state.manageCanDeleteStep)
    return(
        <div onClick={()=>{
            manageCanDeleteStep()
            updateCanDeleteData()
            updateAccountSubsidiaryId (data.accountSubsidiaryId)
        }}  className={`flex flex-row cursor-pointer px-5 ${subsidiaryId === data.accountSubsidiaryId ? "bg-primary-extraLight text-primary-main" : "text-text-color-1 "} items-center w-full border rounded-2xl mb-3 border-text-color-2/20 py-3`}>
            <div className={"w-1/2"}>
                <p className={"font-medium"}>{data?.accountSubsidiaryName}</p>
                <div className={"flex flex-row text-text-color-2 mt-2 items-center w-full"}>
                    {data?.accountGroupName + ' / ' + data?.accountGeneralName}
                </div>
            </div>
            <div className={"w-1/2 text-end text-text-color-2"}>
                <p className={"text-text-color-1 font-medium mb-2"}>کد حساب</p>
                {data?.accountSubsidiaryCode}
            </div>
        </div>
    )
}

export default AllSpecLinkCard;