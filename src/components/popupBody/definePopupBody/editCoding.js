import {DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";

const EditCoding = () => {

    return(
        <>
            <DialogHeader className={"flex flex-row items-center gap-[8px]"}>
                {"اطلاعات کسب و کار"}
            </DialogHeader>
            <DialogBody>
                "body"
            </DialogBody>
            <DialogFooter className={"flex flex-row w-full items-center gap-[10px]"}>
                "footer"
            </DialogFooter>
        </>
    )
}

export default EditCoding;