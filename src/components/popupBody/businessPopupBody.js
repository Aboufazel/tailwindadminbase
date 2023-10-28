import {DialogBody, DialogFooter} from "@material-tailwind/react";
import popupStore from "../../zustand/popupStore";
import Buttons from "../globals/Buttons";

const BusinessPopupBody = () => {
    const managePopup = popupStore(state => state.manageOpenPopUp)
    return(
        <>
            <DialogBody>
                business popup data body components
            </DialogBody>
            <DialogFooter className={"flex flex-row items-center gap-[10px]"}>
                <Buttons light={true} onClick={managePopup}>
                    <span>{"فعال سازی حساب"}</span>
                </Buttons>
            </DialogFooter>
        </>
    )
}

export default BusinessPopupBody;