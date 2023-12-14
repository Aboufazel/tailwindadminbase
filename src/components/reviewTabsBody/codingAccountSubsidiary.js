import useReviewTabStore from "../../zustand/reviewTabStore";
import {useAllAccountSubsidiaryByMain} from "../../hooks/coding";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import Tables from "../globals/tables/tables";
import {codingAccountSubsidiaryTableHead} from "../../data/codingAccountGroupData";
import AccountSpecAction from "../reviewTabsActionLayout/accountSpecAction";
import {useEffect} from "react";

const CodingAccountSubsidiary = () => {
    const actionLayout = useReviewTabStore(state => state.actionLayout)
    const accountGeneralId = useReviewTabStore(state => state.codingAccountMainId)

    const {data ,
        isLoading ,
        isError,
        refetch,
        isRefetching} = useAllAccountSubsidiaryByMain('accountSubsidiaryByGeneral' , accountGeneralId);

    useEffect(() => {
        refetch()
    }, [actionLayout]);

    if (isLoading || isRefetching)
        return <LoadingComponents title={'دریافت حساب معین'}/>

    if (isError)
        return (
            toast.error('دریافت با مشکل مواجه شد!')
        )

    return(
        actionLayout ?
            <AccountSpecAction/>
            :
            <Tables  headers={codingAccountSubsidiaryTableHead} bodyId={"coding"} step={'accountSubsidiary'} data={data?.data.accountSubsidiaries}/>
    )
}

export default CodingAccountSubsidiary;