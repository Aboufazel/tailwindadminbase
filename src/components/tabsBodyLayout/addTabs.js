import {Plus} from "react-iconly";
import popupStore from "../../zustand/popupStore";
import PopupComponents from "../popup/popupComponents";
import popupDataStore from "../../zustand/popupDataStore";

const AddTabs = () => {
    const managePopup = popupStore(state => state.manageOpenPopUp);
    const updatePopupHeader = popupDataStore((state) => state.updatePopupHeader);
    const updatePopupBody = popupDataStore((state) => state.updatePopupBodyData);

    const bodyData = [
        {id:'account-group' , title:'گروه حساب' , action:''},
        {id:'account-main' , title:'حساب کل' , action:''},
        {id:'account-person' , title:'حساب معین' , action:''},
        {id:'account-define' , title:'حساب تفضیلی پیش فرض' , action:''},
        {id:'account-type' , title:'نوع حساب' , action:''},
    ]

    return(
        <>
            {
                bodyData.map(items => (
                    <div key={"add-tabs-body" + items.id}
                         onClick={()=>{
                             managePopup()
                             updatePopupHeader(items.title)
                             updatePopupBody(["test body" + items.title])
                         }}
                         className={"flex flex-row hover:text-primary-main text-text-color-1 transition-all ease-in-out duration-150 hover:font-bold items-center my-[20px] cursor-pointer gap-[12px]"}>
                        <Plus set={"bulk"} style={{color:"#0D6DFD"}}/> {items.title}
                    </div>
                ))
            }
            <PopupComponents/>
        </>
    )
}

export default AddTabs;