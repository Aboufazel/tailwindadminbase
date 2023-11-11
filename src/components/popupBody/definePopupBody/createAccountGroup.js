import {Spinner} from "@material-tailwind/react";
import useStore from "../../../zustand/store";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import {addAccountGroup} from "../../../api/accountGroupApi";
import {addAccountGroupInputs} from "../../../data/accountGroupInputsData";
import ActionCodingTitle from "../../actionCodingTitle/actionCodingTitle";

const CreateAccountGroup = () => {
    const [loading, setLoading] = useState(false);
    const accountCodingKindId = useStore(state => state.codingKindId)
    const formValidate = yup.object().shape({
        accountGroupName:yup.string().required("وارد کردن نام گروه اجباری است"),
        accountGroupCode:yup.string().required("وارد کردن کد گروه اجباری است"),
    });
    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    const onFormSubmit = async (data) =>{
        setLoading(true)
        const res = await addAccountGroup(data , accountCodingKindId).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            toast.success("گروه حساب با موفقیت ایجاد شد")
            reset()
            setLoading(false)
        }
    }
    return(
        <>
            <ActionCodingTitle title={'افزودن گروه حساب به'}/>
            <div className={"w-full"}>
                <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-center mt-[16px]"}>
                    <div className={"flex flex-col w-full"}>
                        {
                            addAccountGroupInputs.map((item , index)=>(
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
                        <Buttons type={"submit"}>
                            {
                                loading ?
                                    <p className={"flex flex-row items-center justify-center gap-3"}>
                                        <Spinner/>
                                        {"ثبت"}
                                    </p>
                                    : "ثبت"
                            }
                        </Buttons>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateAccountGroup;