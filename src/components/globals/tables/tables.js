import popupStore from "../../../zustand/popupStore";
import PopupComponents from "../../popup/popupComponents";
import popupDataStore from "../../../zustand/popupDataStore";
import ReviewTabs from "../../tabsBodyLayout/reviewTabs";
import DrawerComponents from "../../drawer/drawerComponents";
import drawerStore from "../../../zustand/drawerStore";
const Tables = ({headers , data ,bodyId}) => {

    const bodyView = {
        'coding':<ReviewTabs/>,
    }

    const managePopup = popupStore(state => state.manageOpenPopUp);
    const updatePopupHeader = popupDataStore((state) => state.updatePopupHeader);
    // const updatePopupBody = popupDataStore((state) => state.updatePopupBodyData);
    const manageDrawer = drawerStore(state => state.manageOpenDrawer)
    return(
            <table className="w-full min-w-max table-auto mt-[40px]">
                <thead>
                <tr className={"text-right w-[50px] text-white bg-primary-main"}>
                    {headers.map((header) => (
                        <th key={header.name.toString()} className="font-medium leading-none p-4">{header.title}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="cursor-pointer even:bg-blue-gray-50/50" onClick={()=>{
                        if(bodyId === "business")
                            manageDrawer()
                        else managePopup()
                        updatePopupHeader(row.username)
                    }}>
                        {headers.map((header) => (
                            <td className={"p-4 font-normal"} key={header.name.toString()}>{header.render(row)}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
                {
                    bodyId === "business" ?
                        <DrawerComponents/>
                        :
                        <PopupComponents>
                            {bodyView[bodyId]}
                        </PopupComponents>
                }
            </table>
    )
}

export default Tables;