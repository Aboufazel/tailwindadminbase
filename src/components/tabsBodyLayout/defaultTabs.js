import {useGetAllAccountPerson} from "../../hooks/coding";
import Tables from "../globals/tables/tables";
import useStore from "../../zustand/store";
import {accountDetailDefaultTableHead} from "../../data/accountDetailDefaultLayoutData";
import useReviewTabStore from "../../zustand/reviewTabStore";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import AccountDetailDefaultActionLayout from "../reviewTabsActionLayout/accountDetailDefaultActionLayout";
import {useEffect} from "react";

const DefaultTabs = () => {
  const codingId = useStore(state => state.codingKindId)
  const actionLayout = useReviewTabStore(state => state.actionLayout)
  const {data , isLoading ,refetch,isRefetching ,isError} = useGetAllAccountPerson("getAllDetailDefault" , codingId)

  useEffect(() => {
    refetch()
  }, [actionLayout]);

  if(isLoading || isRefetching){
    return (<LoadingComponents title={"دریافت حساب های تفضیلی"}/> )
  }

  if(isError){
    return (
        toast.error("دریافت حساب تفضیلی با مشکل مواجه شد")
    )
  }

  return(
      actionLayout ?
         <AccountDetailDefaultActionLayout/>
      :
          <Tables data={data.data.accountDetailDefaults} step={'accountDetailDefault'}  headers={accountDetailDefaultTableHead}/>
  )
}

export default DefaultTabs;