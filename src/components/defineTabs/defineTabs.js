import useStore from "../../zustand/store";
import {useEffect} from "react";
import {Delete, EditSquare, MoreSquare} from "react-iconly";
import {create} from "zustand";
import Buttons from "../globals/Buttons";

const defineState = create((set)=>({
    actionStatus:false,
    manageActionStatus:()=>set((state)=>({actionStatus:state.actionStatus !== true})),
}))
const DefineTabs = ({tabsData=[]}) => {
    const updateTabs = useStore((state) => state.updateTabs)
    const defineTabs = useStore(state => state.defineTabs)
    const { actionStatus, manageActionStatus } = defineState()

    useEffect(() => {
       tabsData.length > 0 && updateTabs(tabsData[0].id)
    } , []);

    const CodingActionCompo = ()=>{

        return(
            <div className={"flex flex-col absolute left-0 -top-16 items-end"}>
                <MoreSquare onClick={()=>manageActionStatus()} style={{color:"#F16A1B"}} className={"cursor-pointer"} set={"bulk"}/>

                {
                    actionStatus ?
                        <div className={"flex flex-row mt-3 items-center gap-3"}>
                           <Buttons cls={"flex flex-row gap-3 items-center !text-[12px] font-bold"} color={"warning"} light={true}>
                               <EditSquare set={"bulk"} size={18}/>
                               {"ویرایش"}
                           </Buttons>
                           <Buttons cls={"flex flex-row gap-3 items-center !text-[12px] font-bold"} color={"danger"} light={true}>
                               <Delete set={"bulk"} size={18}/>
                               {"حذف"}
                           </Buttons>
                        </div>
                        :""
                }
            </div>
        )
    }

    return(
        <div className={"flex flex-row relative mt-[40px] w-full items-center gap-8"}>
            {
                tabsData && tabsData.map(items => (
                    <p  key={"define-tabs" + items.id}
                        onClick={() => updateTabs(items.id)}
                        className={` 
                        ${items.id === defineTabs ? "border-b-2 font-bold border-primary-main text-primary-main" : "font-medium text-text-color-2"} 
                        max-w-max min-w-[50px] px-[12px] py-[5px] transition-all ease-in-out duration-150 text-center cursor-pointer`}>
                        {items.title}
                    </p>
                ))
            }
            <CodingActionCompo/>
        </div>
    )
}

export default DefineTabs;