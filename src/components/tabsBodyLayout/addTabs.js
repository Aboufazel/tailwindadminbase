import {ArrowLeft, Plus} from "react-iconly";
import {create} from "zustand";
import CreateAccountGroup from "../popupBody/definePopupBody/createAccountGroup";
import useActionType from "../../zustand/actionTypeStore";
import CreateAccountMain from "../popupBody/definePopupBody/createAccountMain";
import CreateAccountSpeac from "../popupBody/definePopupBody/createAccountSpeac";
import CreateAccountType from "../popupBody/definePopupBody/createAccountType";
import CreateAccountDefaultPerson from "../popupBody/definePopupBody/createAccountDefaultPerson";

const usePopupBody = create((set)=>({
    selectType:"",
    actionStatus:false,
    manageActionStatus:()=>set((state)=>({actionStatus:state.actionStatus !== true})),
    updateSelectType: (selectType) => set(() => ({ selectType: selectType })),
}))


const AddTabs = () => {
    const {actionStatus, manageActionStatus , updateSelectType} = usePopupBody()
    const actionType = useActionType(state => state.actionType)
    const updateActionType = useActionType(state => state.updateActionType)
    const bodyData = [
        {id:'account-group' , title:'گروه حساب' , action:'form'},
        {id:'account-main' , title:'حساب کل' , action:'form'},
        {id:'account-speac' , title:'حساب معین' , action:'form'},
        {id:'account-define' , title:'حساب تفضیلی پیش فرض' , action:'list'},
        {id:'account-type' , title:'نوع حساب' , action:'form'},
    ]

    const actionBody = {
        "account-group": <CreateAccountGroup/>,
        "account-main": <CreateAccountMain/>,
        "account-speac": <CreateAccountSpeac/>,
        "account-define": <CreateAccountDefaultPerson/>,
        "account-type": <CreateAccountType/>,
    }

    return(
        <>
            <div className={"w-full relative"}>
                {
                    actionStatus ?
                        <div
                            onClick={()=>{
                                manageActionStatus()
                            }}
                            className={`flex flex-row items-center 
                        hover:bg-primary-main hover:text-white 
                        absolute left-0
                        justify-center rounded-[5px] 
                        cursor-pointer bg-primary-extraLight  max-w-max px-[12px] gap-3 h-[35px]`}>
                            <p>بازگشت</p>
                            <ArrowLeft set={"bulk"}/>
                        </div>
                        : ""
                }
                {
                    actionStatus ?
                        <div className={"w-full"}>
                            {actionBody[actionType]}
                        </div> : bodyData.map(items => (
                            <div key={"add-tabs-body" + items.id}
                                 onClick={()=>{
                                     manageActionStatus()
                                     updateSelectType(items.action)
                                     updateActionType(items.id)
                                 }}
                                 className={"flex flex-row hover:text-primary-main max-w-max text-text-color-1 transition-all ease-in-out duration-150 hover:font-bold items-center my-[20px] cursor-pointer gap-[12px]"}>
                                <Plus set={"bulk"} style={{color:"#0D6DFD"}}/> {items.title}
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default AddTabs;