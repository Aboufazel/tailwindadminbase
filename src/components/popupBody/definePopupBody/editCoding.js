import * as yup from "yup";
import {DialogBody, DialogHeader, Spinner} from "@material-tailwind/react";
import useStore from "../../../zustand/store";
import {useAllCodingAccount, useGetCodingById} from "../../../hooks/coding";
import {addAccountCodingKindInputs} from "../../../data/codingKindInputsData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import React, {useState} from "react";
import {editCoding} from "../../../api/codingKind";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import LoadingComponents from "../../loading/loadingComponents";
import popupStore from "../../../zustand/popupStore";

const EditCoding = () => {
    const codingTitle = useStore(state=>state.codingTitle)
    const accountCodingId = useStore(state => state.codingKindId)
    const [loading, setLoading] = useState(false);
    const managePopup = popupStore(state => state.manageOpenPopUp);
    const {data , isLoading , isRefetching, isError} = useGetCodingById('getCodingById' ,accountCodingId )
    const {refetch} = useAllCodingAccount("getAllSideCoding")
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
        setLoading(!loading)
        const res = await editCoding(data , accountCodingId).catch(() => {
            toast.error("ویرایش انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            toast.success("کدینگ با موفقیت ویرایش شد")
            reset()
            refetch()
            managePopup()
            setLoading(false)
        }
    }
    
    if (isLoading || isRefetching){
        return (<LoadingComponents title={"در حال دریافت اطلاعات"}/> )
    }

    if (isError){
        return (toast.error('دریافت کدینگ با مشکل مواجه شد!'))
    }

    return(
        <>
            <DialogHeader className={"flex flex-row items-center text-text-color-2 font-bold text-[18px] gap-[8px]"}>
                {"  ویرایش کدینگ  "}{codingTitle}
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
                                        inputType={item.inputType}
                                        defaultValue={
                                        index === 0 ? data.data.accountCodingKinds[0].accountCodingKindName :
                                        index === 1 ? data.data.accountCodingKinds[0].accountCodingKindCode :
                                        index === 2 ? data.data.accountCodingKinds[0].accountCodingKindDesc : ""
                                }/>
                            ))
                        }
                    </div>
                    <div className={"flex flex-row justify-end w-full mt-5"}>
                        <Buttons type={"submit"}>
                            {
                                loading ?
                                    <p className={"flex flex-row items-center justify-center gap-3"}>
                                        <Spinner/>
                                        {"ویرایش"}
                                    </p>
                                    : "ویرایش"
                            }
                        </Buttons>
                    </div>
                </form>
            </DialogBody>
        </>
    )
}

export default EditCoding;