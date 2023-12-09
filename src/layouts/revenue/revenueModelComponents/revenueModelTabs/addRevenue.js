import useActionType from "../../../../zustand/actionTypeStore";
import useAccountPersonStore from "../../../../zustand/accountPersonStore";
import BackBtn from "../../../../components/reviewTabsActionLayout/actionComponents/backBtn";
import {Plus} from "react-iconly";
import {create} from "zustand";
import AddRevenuePlans from "../../revenueLayout/addRevenuePlans";
import AddModels from "../../revenueLayout/addModels";
import AddPlanPrices from "../../revenueLayout/addPlanPrices";

const useReveneuAction = create((set)=>({
    selectType:"",
    actionStatus:false,
    manageActionStatus:()=>set((state)=>({actionStatus:state.actionStatus !== true})),
    updateSelectType: (selectType) => set(() => ({ selectType: selectType })),
}))
const AddRevenue = () => {
    const {actionStatus, manageActionStatus , updateSelectType} = useReveneuAction()
    const actionType = useActionType(state => state.actionType)
    const updateActionType = useActionType(state => state.updateActionType)
    const showFormStatus = useAccountPersonStore(state => state.showFormStatus);
    const updateAccountTypeName = useAccountPersonStore(state => state.updateAccountTypeName);
    const manageShowFormStatus = useAccountPersonStore(state => state.manageShowFormStatus);
    const bodyData = [
        {id:'add-models' , title:'مدل درآمدی' , action:'form'},
        {id:'add-plans' , title:'پلن درآمدی' , action:'form'},
        {id:'add-prices' , title:'قیمت ها' , action:'form'},
    ]

    const actionBody = {
        "add-models": <AddModels/> ,
        "add-plans": <AddRevenuePlans/>,
        "add-prices": <AddPlanPrices/>,
    }

    return(
        <>
            <div className={"w-full relative"}>
                {
                    actionStatus ?
                        <BackBtn onClick={()=>{
                            manageActionStatus()
                            if(showFormStatus){
                                updateAccountTypeName('')
                                manageShowFormStatus()
                            }
                        }}/>
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
                                 className={"flex flex-row hover:text-primary-main max-w-max dark:text-text-color-3 dark:hover:text-white text-text-color-1 transition-all ease-in-out duration-150 hover:font-bold items-center my-[20px] cursor-pointer gap-[12px]"}>
                                <Plus set={"bulk"} style={{color:"#0D6DFD"}}/> {items.title}
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default AddRevenue;