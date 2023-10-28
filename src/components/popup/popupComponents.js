import popupStore from "../../zustand/popupStore";
import {
    Dialog,
    DialogHeader,
} from "@material-tailwind/react";
import popupDataStore from "../../zustand/popupDataStore";
const PopupComponents = ({children}) => {
    const popupStatus = popupStore(state => state.popupStatus);
    const managePopup = popupStore(state => state.manageOpenPopUp)
    const popupHeader = popupDataStore(state => state.popupHeader);


    return(
        <Dialog open={popupStatus} size={"lg"} handler={managePopup}>
            <DialogHeader className={"flex flex-row items-center gap-[8px]"}>
                {popupHeader}
            </DialogHeader>
            {children}
        </Dialog>
    )
}

export default PopupComponents;