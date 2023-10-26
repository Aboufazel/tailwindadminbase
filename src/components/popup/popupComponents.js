import popupStore from "../../zustand/popupStore";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import popupDataStore from "../../zustand/popupDataStore";
const PopupComponents = () => {
    const popupStatus = popupStore(state => state.accountType);
    const managePopup = popupStore(state => state.manageOpenPopUp)
    const popupHeader = popupDataStore(state => state.popupHeader);
    const popupBody = popupDataStore(state => state.popupBodyData);

    console.log(popupHeader , popupBody , "header and body")

    return(
        <Dialog open={popupStatus} handler={managePopup}>
            <DialogHeader>{popupHeader}</DialogHeader>
            <DialogBody>
                {
                    popupBody[0]
                }
                {
                    popupBody[1]
                }
            </DialogBody>
            <DialogFooter className={"flex flex-row items-center gap-[10px]"}>
                <Button
                    variant="text"
                    color="red"
                    onClick={managePopup}
                    className="mr-1"
                >
                    <span>{"انصراف"}</span>
                </Button>
                <Button variant="gradient" color="green" onClick={managePopup}>
                    <span>{"تایید"}</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default PopupComponents;