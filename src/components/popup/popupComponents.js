import popupStore from "../../zustand/popupStore";
import {
    Dialog,
    DialogHeader,
} from "@material-tailwind/react";
import popupDataStore from "../../zustand/popupDataStore";
const PopupComponents = ({children}) => {
    const popupStatus = popupStore(state => state.popupStatus);
    const managePopup = popupStore(state => state.manageOpenPopUp)

    return(
        <Dialog open={popupStatus} size={"lg"} handler={managePopup}>
            {children}
        </Dialog>
    )
}

export default PopupComponents;