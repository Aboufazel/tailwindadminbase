import popupStore from "../../../zustand/popupStore";
import {DialogBody, DialogHeader} from "@material-tailwind/react";
import Buttons from "../../globals/Buttons";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Inputs from "../../globals/inputs/inputs";
import React from "react";
import {addAccountCodingKindInputs} from "../../../data/codingKindInputsData";
import {toast} from "react-toastify";
import {addCoding} from "../../../api/codingKind";

const AddCodingKind = () => {
    const managePopup = popupStore(state => state.manageOpenPopUp);

    const formValidate = yup.object().shape({
        accountCodingKindName:yup.string().required("وارد کردن نام اجباری است"),
        accountCodingKindCode:yup.string().required("وارد کردن کد اجباری است"),
    });
    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    const onFormSubmit = async (data) =>{
        const res = await addCoding(data).catch(() => {
            toast.error("ثبت انجام نشد")
            managePopup()
        })
        if (res?.status === 200){
            managePopup()
            toast.success("کدینگ با موفقیت ثبت شد")
            reset()
        }
    }
    return(
        <>
            <DialogHeader className={"flex flex-row items-center gap-[8px]"}>
                {"ثبت کدینگ جدید"}
            </DialogHeader>
            <DialogBody>
                <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-center mt-[16px]"}>
                    <div className={"flex flex-col w-full"}>
                        {
                            addAccountCodingKindInputs.map((item , index)=>(
                                <Inputs type={item.type}
                                        iClass={item.width}
                                        key={"input-value"+index}
                                        error={errors[item.inputName] ? errors[item.inputName].message : false}
                                        register={register}
                                        name={item.inputName}
                                        label={item.inputLabel}
                                        inputType={item.inputType}/>
                            ))
                        }
                    </div>
                    <div className={"flex flex-row justify-end w-full mt-5"}>
                        <Buttons type={"submit"}>ثبت</Buttons>
                    </div>
                </form>
            </DialogBody>
        </>
    )
}

export default AddCodingKind;