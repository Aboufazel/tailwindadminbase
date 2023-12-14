import useReviewTabStore from "../../zustand/reviewTabStore";
import {useAllAccountMain} from "../../hooks/coding";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import Tables from "../globals/tables/tables";
import {codingAccountMainsTableHead} from "../../data/codingAccountGroupData";
import {useEffect} from "react";
import AccountMainAction from "../reviewTabsActionLayout/accountMainAction";

const CodingAccountGeneral = () => {
    const actionLayout = useReviewTabStore(state => state.actionLayout)
    const accountGroupId = useReviewTabStore(state => state.codingAccountGroupId)
    const updateStepView = useReviewTabStore(state => state.updateReviewStep);
    const updateMainName = useReviewTabStore(state => state.updateAccountMainName)


    useEffect(() => {
        updateMainName('')
    }, []);
    const {data ,
        isLoading ,
        isError,
        isRefetching} = useAllAccountMain('accountGeneralsByGroup' , accountGroupId);

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
                <AccountMainAction/>
                :
                <Tables  headers={codingAccountMainsTableHead} bodyId={"coding"} step={'accountGeneral'} data={data.data.accountGenerals}/>
        )
    }
}

export default CodingAccountGeneral;