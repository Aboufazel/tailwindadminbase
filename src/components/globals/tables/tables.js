import popupStore from "../../../zustand/popupStore";
import PopupComponents from "../../popup/popupComponents";
import popupDataStore from "../../../zustand/popupDataStore";

const TABLE_HEAD = ["عنوان", "نام", "وضعیت"];
const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];
const Tables = ({tableData=[] , tableHead=[]}) => {

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
                        updatePopupBody(status)
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
                <PopupComponents/>
            </table>
    )
}

export default Tables;