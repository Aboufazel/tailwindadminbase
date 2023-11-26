import {useGetAllAccountPerson} from "../../hooks/coding";
import Tables from "../globals/tables/tables";
import useStore from "../../zustand/store";
import {personsTableHead} from "../../data/personLayoutData";
import useReviewTabStore from "../../zustand/reviewTabStore";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import AccountPersonActionLayout from "../reviewTabsActionLayout/accountPersonActionLayout";

const DefaultTabs = () => {
  const codingId = useStore(state => state.codingKindId)
  const actionLayout = useReviewTabStore(state => state.actionLayout)
  const {data , isLoading , isError} = useGetAllAccountPerson("getAllPersons" , codingId)

  if(isLoading){
    return (<LoadingComponents title={"دریافت حساب های تفضیلی"}/> )
  }

  if(isError){
    return (
        toast.error("دریافت معین با مشکل مواجه شد")
    )
  }

  return(
      actionLayout ?
         <AccountPersonActionLayout/>
      :
          <Tables data={data.data.defaultPersons} step={'accountPerson'}  headers={personsTableHead}/>
  )
}

export default DefaultTabs;