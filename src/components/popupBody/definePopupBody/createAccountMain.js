import SelectInput from "../../globals/inputs/selectInput";
import {useAllAccountGroup} from "../../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../../loading/loadingComponents";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {create} from "zustand";
import {addAccountMainInputs} from "../../../data/accountMainInputsData";
import Inputs from "../../globals/inputs/inputs";
import React, {useState} from "react";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import {addAccountMain} from "../../../api/accountMainApi";


const formStore = create((set)=>({
    typeButton:[
        {id:'always' , title:'دائم', value:'1'},
        {id:'temporary' , title:'موقت', value:'0'},
    ],
    instinctButton:[
        {id:'debtor' , title:'بدهکار', value:'1'},
        {id:'creditor' , title:'بستانکار', value:'2'},
    ],
    type:'',
    instinct: '0',
    updateInstinct:(instinct) => set(() => ({ instinct: instinct })),
    updateType:(type)=>set(()=>({type:type}))
}))
const CreateAccountMain = () => {
    const {instinct , type ,updateInstinct ,typeButton ,updateType ,instinctButton} = formStore()
    const [loading, setLoading] = useState(false);
    const formValidate = yup.object().shape({
        accountGroupId:yup.string(),
        accountMainName:yup.string().required("وارد کردن نام اجباری است"),
        accountMainCode:yup.string().required("وارد کردن کد اجباری است"),
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
        console.log(data)
        const res = await addAccountMain(data , instinct , type).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            reset()
            toast.success("حساب کل با موفقیت ایجاد شد")
            setLoading(false)
        }
    }


    const {isLoading,isRefetching , isError , data} = useAllAccountGroup('accountsGroup')

    if (isError){
        return (
            toast.error('دریافت اطلاعات با مشکل مواجه شد!')
        )
    }

    if (isLoading || isRefetching){
        return (
            <LoadingComponents title={'دریافت اطلاعات'}/>
        )
    }

    return(
        <form onSubmit={handleSubmit(onFormSubmit)} className={"w-full pt-14"}>
            <SelectInput label={'گروه حساب'} type={'account-group'} register={register} data={data && data.data.accountGroups}/>
            <div className={"flex flex-row gap-3 mt-6 w-full"}>
                {
                    instinctButton.map((items , index)=>(
                        <div key={items.id + index} onClick={()=>updateInstinct(items.value)}
                             className={`cursor-pointer 
                             ${instinct === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                            {items.title}
                        </div>
                    ))
                }
            </div>
            <div className={"flex flex-col w-full"}>
                {
                    addAccountMainInputs.map((item , index)=>(
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
            <div className={"flex flex-row gap-3 mt-6 w-full"}>
                {
                    typeButton.map((items , index)=>(
                        <div key={items.id + index} onClick={()=>updateType(items.value)}
                             className={`cursor-pointer 
                             ${type === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                            {items.title}
                        </div>
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
    )
}

export default CreateAccountMain;