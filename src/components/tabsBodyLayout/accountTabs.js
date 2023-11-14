import useStore from "../../zustand/store";
import {useAllAccountTypesByCoding} from "../../hooks/coding";
import Tables from "../globals/tables/tables";
import {codingAccountTypesTableHead} from "../../data/accountTypesData";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import AccountGroupAction from "../reviewTabsActionLayout/accountGroupAction";
import useReviewTabStore from "../../zustand/reviewTabStore";

const AccountTabs = () => {

    const accountCodingId = useStore(state => state.codingKindId)
    const actionLayout = useReviewTabStore(state => state.actionLayout)
    const {data ,
        isError ,
        isLoading ,
        isRefetching}  = useAllAccountTypesByCoding('accountTypesById' , accountCodingId)

    if (isLoading || isRefetching){
        return  <LoadingComponents title={'دریافت نوع حساب'}/>
    }

    if (isError){
        return (
            toast.error('دریافت با مشکل مواجه شد')
        )
    }

    return(
        actionLayout ?
            <AccountGroupAction/>
            :
            <Tables bodyId={'coding'} step={'accountType'} headers={codingAccountTypesTableHead} data={data.data.accountTypes}/>
    )
}

export default AccountTabs;