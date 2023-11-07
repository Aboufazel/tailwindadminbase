import React from "react";
import {addAccountCodingKindInputs} from "../../data/codingKindInputsData";
import Inputs from "../../components/globals/inputs/inputs";
import Buttons from "../../components/globals/Buttons";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addCoding} from "../../api/codingKind";
import {toast} from "react-toastify";

const CreateNewCoding = () => {

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
        })
        if (res?.status === 200){
            toast.success("کدینگ با موفقیت ثبت شد")
            reset()
        }
    }
    return(
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
    )
}


export default CreateNewCoding;