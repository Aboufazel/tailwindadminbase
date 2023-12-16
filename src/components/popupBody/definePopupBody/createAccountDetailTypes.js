import React, {useState} from "react";
import ActionCodingTitle from "../../actionCodingTitle/actionCodingTitle";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import formStore from "../../../zustand/formStore";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import {addAccountDetailType} from "../../../api/accountTypeApi";
import useStore from "../../../zustand/store";
import {addAccountDetailTypeInputs} from "../../../data/accountDetailTypeInputData";

const CreateAccountDetailTypes = () => {
    const isFloat = formStore(state => state.isFloat)
    const updateIsfloat = formStore(state => state.updateIsFloat)
    const floatButton = formStore(state => state.floatButton)
    const updateIsAutomatic = formStore(state => state.updateIsAutomatic)
    const isAutomatic = formStore(state => state.isAutomatic)
    const automaticButton = formStore(state => state.automaticButton)
    const [loading, setLoading] = useState(false);
    const accountCodingId = useStore(state => state.codingKindId)

    const formValidate = yup.object().shape({
        accountDetailTypeName:yup.string().required("وارد کردن نام اجباری است"),
        accountDetailTypeCode:yup.string().required("وارد کردن کد اجباری است"),
        type:yup.string().required("وارد کردن نام یکتا اجباری است"),
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
        const res = await addAccountDetailType(data , accountCodingId , isAutomatic , isFloat).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            reset()
            updateIsfloat('')
            updateIsAutomatic('')
            toast.success("نوع حساب با موفقیت ایجاد شد")
            setLoading(false)
        }
    }
  return(
      <>
        <ActionCodingTitle title={'افزودن نوع حساب به'}/>
        <form onSubmit={handleSubmit(onFormSubmit)} className={"w-full pt-5"}>
              <div className={"flex flex-row gap-3 mt-6 w-full"}>
                  {
                      floatButton.map((items, index) => (
                          <div key={items.id + index} onClick={() => updateIsfloat(items.value)}
                               className={`cursor-pointer 
                             ${isFloat === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                              {items.title}
                          </div>
                      ))
                  }
              </div>
              <div className={"flex flex-col w-full"}>
                  {
                      addAccountDetailTypeInputs.map((item, index) => (
                          <Inputs type={item.type}
                                  iClass={item.width}
                                  key={"input-value" + index}
                                  error={errors[item.inputName] ? errors[item.inputName].message : false}
                                  register={register}
                                  name={item.inputName}
                                  label={item.inputLabel}
                                  inputType={item.inputType}/>
                      ))
                  }
              </div>
              <div className={"flex flex-row gap-3 mt-6 w-full"}>
                  {
                      automaticButton.map((items, index) => (
                          <div key={items.id + index} onClick={() => updateIsAutomatic(items.value)}
                               className={`cursor-pointer 
                             ${isAutomatic === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                              {items.title}
                          </div>
                      ))
                  }
              </div>
              <div className={"flex flex-row justify-end w-full mt-5"}>
                  <Buttons disabled={(isAutomatic.length <= 0 && isFloat.length <= 0)} type={"submit"}>
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

export default CreateAccountDetailTypes;