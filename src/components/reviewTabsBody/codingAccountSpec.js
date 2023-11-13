import useReviewTabStore from "../../zustand/reviewTabStore";
import {useAllAccountSpecByMain} from "../../hooks/coding";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import AccountGroupAction from "../reviewTabsActionLayout/accountGroupAction";
import Tables from "../globals/tables/tables";
import {codingAccountSpecTableHead} from "../../data/codingAccountGroupData";

const CodingAccountSpec = () => {
    const actionLayout = useReviewTabStore(state => state.actionLayout)
    const accountMainId = useReviewTabStore(state => state.codingAccountMainId)

    const {data ,
        isLoading ,
        isError,
        isRefetching} = useAllAccountSpecByMain('accountSpecsByMain' , accountMainId);

    if (isLoading || isRefetching)
        return <LoadingComponents title={'دریافت حساب معین'}/>

    if (isError)
        return (
            toast.error('دریافت با مشکل مواجه شد!')
        )

    return(
        actionLayout ?
            <AccountGroupAction/>
            :
            <Tables  headers={codingAccountSpecTableHead} bodyId={"coding"} data={data.data.accountSpecs}/>
    )
}

export default CodingAccountSpec;