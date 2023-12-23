import {addAccountDetailDefaultInputs} from "../../data/accountDetailDefaultInputData";
import Inputs from "../globals/inputs/inputs";
import React, {useState} from "react";
import Buttons from "../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import {toast} from "react-toastify";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addAccountDetailDefaults} from "../../api/accountDetailDefaultsApi";
import useAccountPersonStore from "../../zustand/accountPersonStore";
import useStore from "../../zustand/store";
const CreateAccountPersonForm = () => {
   const [loading, setLoading] = useState(false);
   const accountDetailTypeId = useAccountPersonStore(state => state.accountTypeId)
   const accountCodingId = useStore(state => state.codingKindId)
   const formValidate = yup.object().shape({
      accountDetailDefaultName:yup.string().required("وارد کردن نام اجباری است"),
      accountDetailDefaultCode:yup.number().required("وارد کردن کد اجباری است").min(1,"کد نباید کمتر از ۱ باشد").max(100 , "کد نباید بیشتر از ۱۰۰ باشد"),
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
      const res = await addAccountDetailDefaults(data , accountCodingId , accountDetailTypeId).catch(() => {
         toast.error("ثبت انجام نشد")
         setLoading(false)
      })
      if (res?.status === 200){
         toast.success("حساب تفضیلی با موفقیت ثبت شد")
         reset()
         setLoading(false)
      }
   }

   return(

       <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-center mt-[16px]"}>
          <div className={"flex flex-col w-full"}>
             {
                addAccountDetailDefaultInputs.map((item , index)=> (
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
             <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                <p className={"dark:text-text-color-3 text-[14px]"}>غیر قابل حذف است</p>
                <input {...(register && register("canDelete"))}
                       type="checkbox" id="canDelete"
                       name="canDelete"
                       value="1"/>
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

export default CreateAccountPersonForm;