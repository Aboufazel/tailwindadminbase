import useStore from "../../zustand/store";
import {useEffect} from "react";

const DefineTabs = ({tabsData=[]}) => {
    const updateTabs = useStore((state) => state.updateTabs)
    const defineTabs = useStore(state => state.defineTabs)

    console.log(defineTabs , "tabs")

    useEffect(() => {
       tabsData.length > 0 && updateTabs(tabsData[0].id)
    } , []);

    return(
        <div className={"flex flex-row mt-[40px] w-full items-center gap-8"}>
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
        </div>
    )
}

export default DefineTabs;