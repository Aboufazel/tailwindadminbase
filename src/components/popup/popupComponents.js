import popupStore from "../../zustand/popupStore";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import popupDataStore from "../../zustand/popupDataStore";
import {Plus} from "react-iconly";
const PopupComponents = () => {
    const popupStatus = popupStore(state => state.accountType);
    const managePopup = popupStore(state => state.manageOpenPopUp)
    const popupHeader = popupDataStore(state => state.popupHeader);
    const popupBody = popupDataStore(state => state.popupBodyData);

    console.log(popupHeader , popupBody , "header and body")

    return(
        <Dialog open={popupStatus} size={"lg"} handler={managePopup}>
            <DialogHeader className={"flex flex-row items-center gap-[8px]"}>
                <Plus set={"bulk"} style={{color:"#0D6DFD"}}/>{popupHeader}
            </DialogHeader>
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
                    color="black"
                    onClick={managePopup}
                    className="mr-1"
                >
                    <span>{"انصراف"}</span>
                </Button>
                <Button variant="gradient" color="blue" onClick={managePopup}>
                    <span>{"تایید"}</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default PopupComponents;