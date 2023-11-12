import React, {useState} from "react";
import {addAccountCodingKindInputs} from "../../data/codingKindInputsData";
import Inputs from "../../components/globals/inputs/inputs";
import Buttons from "../../components/globals/Buttons";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addCoding} from "../../api/codingKind";
import {toast} from "react-toastify";
import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import {Spinner} from "@material-tailwind/react";
import {useAllCodingAccount} from "../../hooks/coding";

const CreateNewCoding = () => {
    const [loading, setLoading] = useState(false);
    const breadCrumbsData = [
        {id:"business" , title:"داشبورد" , link:"/main"},
        {id:"business" , title:"کدینگ حسابداری جدید" , link:"#"},
    ]

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

    const {refetch} = useAllCodingAccount("getAllSideCoding")
    const onFormSubmit = async (data) =>{
        setLoading(!loading)
        const res = await addCoding(data).catch(() => {
            refetch()
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            toast.success("کدینگ با موفقیت ثبت شد")
            reset()
            setLoading(false)
        }
    }
    return(
        <>
            <BreadCrumbs data={breadCrumbsData}/>
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
        </>
    )
}


export default CreateNewCoding;