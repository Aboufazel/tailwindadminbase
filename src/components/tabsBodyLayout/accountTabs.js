import useStore from "../../zustand/store";
import {useAllAccountTypesByCoding} from "../../hooks/coding";
import Tables from "../globals/tables/tables";
import {codingAccountTypesTableHead} from "../../data/accountTypesData";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import useReviewTabStore from "../../zustand/reviewTabStore";
import AccountDetailTypeAction from "../reviewTabsActionLayout/accountDetailTypeAction";
import {useEffect} from "react";

const AccountTabs = () => {

    const accountCodingId = useStore(state => state.codingKindId)
    const actionLayout = useReviewTabStore(state => state.actionLayout)
    const {data ,
        isError ,
        isLoading ,
        refetch,
        isRefetching}  = useAllAccountTypesByCoding('accountDetailTypeById' , accountCodingId)


    useEffect(() => {
        refetch()
    }, [actionLayout]);

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
            <AccountDetailTypeAction/>
            :
            <Tables bodyId={'coding'} step={'accountDetailType'} headers={codingAccountTypesTableHead} data={data.data.accountDetailTypes}/>
    )
}

export default AccountTabs;