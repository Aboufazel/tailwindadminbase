import popupStore from "../../../zustand/popupStore";
import PopupComponents from "../../popup/popupComponents";
import popupDataStore from "../../../zustand/popupDataStore";
import ReviewTabs from "../../tabsBodyLayout/reviewTabs";
import BusinessPopupBody from "../../popupBody/businessPopupBody";
import {useState} from "react";
import {Link} from "react-router-dom";
import {ArrowLeft, ArrowRight} from "react-iconly";
const Tables = ({headers , data ,bodyId}) => {


    const [currentPage , setCurrentPage] = useState(1);
    const recordPerPage = 15;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex,lastIndex);
    const npage = Math.ceil(data.length/recordPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)


console.log(numbers , "paginate numbers")
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


    const managePopup = popupStore(state => state.manageOpenPopUp);
    const updatePopupBody = popupDataStore((state) => state.updatePopupBodyData);
    return(
           <>
               <div className={"h-[550px] overflow-y-auto"}>
                   <table className="w-full min-w-max table-auto mt-[40px]">
                       <thead>
                       <tr className={"text-right w-[50px] text-white bg-primary-main"}>
                           {headers.map((header) => (
                               <th key={header.name.toString()} className="font-medium leading-none p-4">{header.title}</th>
                           ))}
                       </tr>
                       </thead>
                       <tbody>
                       {records.map((row, index) => (
                           <tr key={index} className="cursor-pointer even:bg-blue-gray-50/50" onClick={()=>{
                               managePopup()
                               updatePopupBody(row)
                           }} >
                               {headers.map((header) => (
                                   <td className={"p-4 font-normal"} key={header.name.toString()}>{header.render(row)}</td>
                               ))}
                           </tr>
                       ))}
                       </tbody>
                       <PopupComponents>
                           {bodyView[bodyId]}
                       </PopupComponents>
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