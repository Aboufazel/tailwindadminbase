import useReviewTabStore from "../../zustand/reviewTabStore";
import {useAllAccountMain} from "../../hooks/coding";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import AccountGroupAction from "../reviewTabsActionLayout/accountGroupAction";
import Tables from "../globals/tables/tables";
import {codingAccountMainsTableHead} from "../../data/codingAccountGroupData";

const CodingAccountMain = () => {
    const actionLayout = useReviewTabStore(state => state.actionLayout)
    const accountGroupId = useReviewTabStore(state => state.codingAccountGroupId)
    const updateStepView = useReviewTabStore(state => state.updateReviewStep);

    const {data ,
        isLoading ,
        isError,
        isRefetching} = useAllAccountMain('accountMainsByGroup' , accountGroupId);

    if (isLoading || isRefetching)
        return <LoadingComponents title={'دریافت حساب کل'}/>

    if (isError)
        return (
            toast.error('دریافت با مشکل مواجه شد!')
        )
    if (accountGroupId.length <= 0){
        updateStepView('coding-account-group')
    }else {
        return(
            actionLayout ?
                <AccountGroupAction/>
                :
                <Tables  headers={codingAccountMainsTableHead} bodyId={"coding"} data={data.data.accountMains}/>
        )
    }
}

export default CodingAccountMain;