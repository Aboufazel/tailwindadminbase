import Tables from "../globals/tables/tables";
import {codingAccountGroupTableHead} from "../../data/codingAccountGroupData";
import useStore from "../../zustand/store";
import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup} from "../../api/codingKind";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import useReviewTabStore from "../../zustand/reviewTabStore";
import AccountGroupAction from "../reviewTabsActionLayout/accountGroupAction";
import {useEffect} from "react";

const CodingAccountGroup = () => {
    const updateGroupName = useReviewTabStore(state => state.updateAccountGroupName)
    useEffect(() => {
        updateGroupName('')
    }, []);

    const accountCodingKindId = useStore(state => state.codingKindId)
    const actionLayout = useReviewTabStore(state => state.actionLayout)
    const {isLoading,
        isRefetching ,
        isError ,
        data} = useQuery(['accountsGroups'] , ()=>getAllAccountGroup(accountCodingKindId))

    if (isLoading || isRefetching)
          return <LoadingComponents title={'دریافت گروه حساب'}/>

    if (isError)
        return (
            toast.error('دریافت با مشکل مواجه شد!')
        )
    return(
        actionLayout ?
            <AccountGroupAction/>
            :
            <Tables  headers={codingAccountGroupTableHead} bodyId={"coding"} step={'accountGroup'} data={data.data.accountGroups}/>
    )
}

export default CodingAccountGroup;