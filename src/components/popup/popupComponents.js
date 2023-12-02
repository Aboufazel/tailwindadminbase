import popupStore from "../../zustand/popupStore";
import {
    Dialog,
} from "@material-tailwind/react";
const PopupComponents = ({children}) => {
    const popupStatus = popupStore(state => state.popupStatus);
    const managePopup = popupStore(state => state.manageOpenPopUp)

    return(
        <Dialog open={popupStatus} size={"lg"}  handler={managePopup}>
            {children}
        </Dialog>
    )
}

export default PopupComponents;