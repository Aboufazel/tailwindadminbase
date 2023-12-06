import popupStore from "../../../zustand/popupStore";
import PopupComponents from "../../popup/popupComponents";
import popupDataStore from "../../../zustand/popupDataStore";
import ReviewTabs from "../../tabsBodyLayout/reviewTabs";
import BusinessPopupBody from "../../popupBody/businessPopupBody";
import {useState} from "react";
import {Link} from "react-router-dom";
import {ArrowLeft, ArrowRight} from "react-iconly";
import useReviewTabStore from "../../../zustand/reviewTabStore";
import useAccountTypeStore from "../../../zustand/accountTypeStore";
import useAccountPersonStore from "../../../zustand/accountPersonStore";
import useRevenueModelStore from "../../../zustand/revenueModelStore";
const Tables = ({headers , data ,bodyId , step}) => {


    const [currentPage , setCurrentPage] = useState(1);
    const recordPerPage = 8;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex,lastIndex);
    const npage = Math.ceil(data.length/recordPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)


    const bodyView = {
        'coding':<ReviewTabs/>,
        'business':<BusinessPopupBody/>
    }

    const nextPage = ()=>{
        if (currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }
    const prePage = ()=>{
        if (currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }
    const changeCurrentPage = (number)=>{
       setCurrentPage(number)
    }
    const updateRevenueModelId = useRevenueModelStore(state => state.updateRevenueModelId)
    const updateAccountTypeId = useAccountTypeStore(state => state.updateAccountTypeId)
    const managePopup = popupStore(state => state.manageOpenPopUp);
    const updatePopupBody = popupDataStore((state) => state.updatePopupBodyData);
    const updataStepView = useReviewTabStore(state => state.updateReviewStep);
    const stepView = useReviewTabStore(state => state.reviewStep)
    const updateAccountGroupId = useReviewTabStore(state => state.updateCodingAccountGroupId)
    const updateAccountMainId = useReviewTabStore(state => state.updateCodingAccountMainId);
    const updateAccountSpecId = useReviewTabStore(state => state.updateCodingAccountSpecId);
    const updateAccountGroupName = useReviewTabStore(state => state.updateAccountGroupName);
    const updateAccountMainName = useReviewTabStore(state => state.updateAccountMainName);
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const manageRevenueActionLayout = useRevenueModelStore(state => state.manageRevenueActionLayout)
    const updateAccountPersonId = useAccountPersonStore(state => state.updateAccountPersonId)



    return(
           <>
               <div className={"h-[540px] overflow-y-auto"}>
                   <table className="w-full min-w-max table-auto mt-[40px]">
                       <thead>
                       <tr className={"text-right w-[50px] text-white dark:bg-dark-800 bg-primary-main"}>
                           {headers.map((header) => (
                               <th key={header.name.toString()} className="font-medium leading-none p-4">{header.title}</th>
                           ))}
                       </tr>
                       </thead>
                       <tbody>
                       {records.map((row, index) => (
                           <tr key={index} className="cursor-pointer dark:bg-dark-100 dark:even:bg-dark-800 dark:text-text-color-3 even:bg-blue-gray-50/50" onClick={()=>{
                               if(bodyId === 'business'){
                                   managePopup()
                                   updatePopupBody(row)
                               }else if(step === 'accountType'){
                                   updateAccountTypeId(row.accountTypeId)
                                   manageActionLayout()
                               }else if(step === "accountPerson"){
                                   manageActionLayout()
                                   updateAccountPersonId(row.defaultPersonId)
                               }else if(step === 'revenueModel'){
                                   updateRevenueModelId(row.revenueModelId)
                                   manageRevenueActionLayout()
                               }
                           }} >
                               {headers.map((header , index) => (
                                   <td
                                       onClick={()=>{
                                           if (bodyId === 'coding' && index === 1 && step !== 'accountType'){
                                               if (stepView === 'coding-account-group'){
                                                   updateAccountGroupId(row.accountGroupId)
                                                   updateAccountGroupName(row.accountGroupName)
                                                   updataStepView('coding-account-main')
                                               }else if(stepView === 'coding-account-main'){
                                                   updateAccountMainName(row.accountMainName)
                                                   updateAccountMainId(row.accountMainId)
                                                   updataStepView('coding-account-spec')
                                               }
                                           } else if(step === 'accountGroup' && index === 3){
                                               updateAccountGroupId(row.accountGroupId)
                                           } else if(step === 'accountMain' && index === 5){
                                               updateAccountMainId(row.accountMainId)
                                           } else if(step === 'accountSpec' && index === 5){
                                               updateAccountSpecId(row.accountSpecId)
                                           }
                                       }}
                                       className={"p-4 font-normal"} key={header.name.toString()}>{header.render(row)}</td>
                               ))}
                           </tr>
                       ))}
                       </tbody>
                       {
                           bodyId === 'business' ?
                               <PopupComponents>
                                   {bodyView[bodyId]}
                               </PopupComponents>
                               : ""
                       }
                   </table>
               </div>
               <nav className={"flex flex-row w-full mt-3 justify-center"}>
                   <ul className="flex flex-row items-center justify-center w-full">
                       <li>
                           <Link
                               className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                               to="#"
                               onClick={prePage}
                               aria-label="Previous"
                           >
                               <ArrowRight set={"bulk"}/>
                           </Link>
                       </li>
                       {
                           numbers.map((number , index) => (
                               <li key={"paginate-items" + index}>
                                   <Link to={"#"} className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm shadow-md transition duration-150 ease-in-out ${currentPage === number ? "bg-primary-main font-medium  text-white" : "text-text-color-3"}`} onClick={()=>changeCurrentPage(number)}>
                                       {number}
                                   </Link>
                               </li>
                           ))
                       }
                       <li>
                           <Link
                               className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                               to="#"
                               onClick={nextPage}
                               aria-label="Next"
                           >
                             <ArrowLeft set={"bulk"}/>
                           </Link>
                       </li>
                   </ul>
               </nav>
           </>
    )
}

export default Tables;