import popupStore from "../../../zustand/popupStore";
import PopupComponents from "../../popup/popupComponents";
import popupDataStore from "../../../zustand/popupDataStore";
import ReviewTabs from "../../tabsBodyLayout/reviewTabs";
import BusinessPopupBody from "../../popupBody/businessPopupBody";
const Tables = ({tableData=[] , tableHead=[] , bodyId}) => {

    const bodyView = {
        'business':<BusinessPopupBody/>,
        'coding':<ReviewTabs/>,
    }

    const managePopup = popupStore(state => state.manageOpenPopUp);
    const updatePopupHeader = popupDataStore((state) => state.updatePopupHeader);
    const updatePopupBody = popupDataStore((state) => state.updatePopupBodyData);

    return(
            <table className="w-full min-w-max table-auto mt-[40px]">
                <thead>
                <tr>
                    {tableHead && tableHead.map((head) => (
                        <th key={head} className="text-right w-[50px] text-white bg-primary-main p-4">
                            <p  className="font-medium leading-none">
                                {head}
                            </p>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableData && tableData.map(({ title, job, status }, index) => (
                    <tr key={title} onClick={()=>{
                        managePopup()
                        updatePopupHeader(job)
                        updatePopupBody([status  +  "وضعیت"])
                    }} className="cursor-pointer even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <p className="font-normal">
                                {title}
                            </p>
                        </td>
                        <td className="p-4">
                            <p className="font-normal">
                                {job}
                            </p>
                        </td>
                        <td className="p-4">
                            <p className="font-normal">
                                {status}
                            </p>
                        </td>
                    </tr>
                ))}
                </tbody>
                <PopupComponents>
                    {bodyView[bodyId]}
                </PopupComponents>
            </table>
    )
}

export default Tables;