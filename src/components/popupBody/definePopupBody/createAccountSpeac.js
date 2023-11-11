import {create} from "zustand";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addAccountMain} from "../../../api/accountMainApi";
import {toast} from "react-toastify";
import {useAllAccountGroup, useAllAccountMain} from "../../../hooks/coding";
import LoadingComponents from "../../loading/loadingComponents";
import SelectInput from "../../globals/inputs/selectInput";
import {addAccountMainInputs} from "../../../data/accountMainInputsData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";

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
    instinct: '',
    updateInstinct:(instinct) => set(() => ({ instinct: instinct })),
    updateType:(type)=>set(()=>({type:type}))
}))
const CreateAccountSpeac = () => {
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

    console.log(type.length , instinct.length)

    const onFormSubmit = async (data) =>{
        setLoading(true)
        const res = await addAccountMain(data , instinct , type).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            reset()
            updateType('')
            updateInstinct('')
            toast.success("حساب کل با موفقیت ایجاد شد")
            setLoading(false)
        }
    }


    const {isLoading,isRefetching , isError , data} = useAllAccountGroup('accountsGroup')

    const {data:allAccountMain} = useAllAccountMain('accountMains');
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

    console.log(allAccountMain , "get all account main data fetch");

    return(
        <form onSubmit={handleSubmit(onFormSubmit)} className={"w-full pt-14"}>
            <SelectInput type={'account-group'} register={register} data={data && data.data.accountGroups}/>
            <SelectInput type={'account-main'} register={register} data={allAccountMain && allAccountMain.data.accountMains}/>
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
                <Buttons disabled={(instinct.length <= 0 && type.length <= 0)} type={"submit"}>
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


export default CreateAccountSpeac;