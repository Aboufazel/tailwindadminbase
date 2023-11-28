import {useGetPersonById} from "../../../hooks/coding";
import useAccountPersonStore from "../../../zustand/accountPersonStore";
import {addAccountPersonInputs} from "../../../data/accountPersonInputData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useState} from "react";
import useStore from "../../../zustand/store";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addAccountDefaultPerson} from "../../../api/accountDefaultPersonApi";
import {toast} from "react-toastify";
import LoadingComponents from "../../loading/loadingComponents";

const EditPersonForm = () => {
    const [loading, setLoading] = useState(false);
    const accountPersonId = useAccountPersonStore(state => state.accountPersonId)
    const {data , isLoading , isError} = useGetPersonById("getPersonByID" , accountPersonId)

    const accountTypeId = useAccountPersonStore(state => state.accountTypeId)
    const accountCodingId = useStore(state => state.codingKindId)
    const formValidate = yup.object().shape({
        accountPersonName:yup.string().required("وارد کردن نام اجباری است"),
        accountPersonCode:yup.string().required("وارد کردن کد اجباری است"),
    });
    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    if (isLoading){
        return(<LoadingComponents title={"دریافت اطلاعات حساب"}/> )
    }

    if (isError){
        return (toast.error("دریافت اصلاعات با مشکل مواجه شد!"))
    }


    const onFormSubmit = async (data) =>{
        setLoading(!loading)
        // const res = await addAccountDefaultPerson(data , accountCodingId , accountTypeId).catch(() => {
        //     toast.error("ثبت انجام نشد")
        //     setLoading(false)
        // })
        // if (res?.status === 200){
        //     toast.success("حساب تفضیلی با موفقیت ثبت شد")
        //     reset()
        //     setLoading(false)
        // }
    }


    return(

        <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-center mt-[16px]"}>
            <div className={"flex flex-col w-full"}>
                {
                    addAccountPersonInputs.map((item , index)=> (
                        <Inputs type={item.type}
                                iClass={item.width}
                                key={"input-value"+index}
                                error={errors[item.inputName] ? errors[item.inputName].message : false}
                                register={register}
                                name={item.inputName}
                                label={item.inputLabel}
                                inputType={item.inputType}
                                defaultValue={
                                  index === 0 ? data.data.defaultPersons[0].defaultPersonCode
                                      :
                                  index === 1  ? data.data.defaultPersons[0].defaultPersonName : ""
                                }
                        />
                    ))
                }
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"text-[14px]"}>غیر قابل حذف است</p>
                    <input {...(register && register("canDelete"))} type="checkbox" id="canDelete" name="canDelete" value="0"/>
                </div>
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
    )
}

export default EditPersonForm;