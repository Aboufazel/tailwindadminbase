import SelectInput from "../../globals/inputs/selectInput";
import {addAccountMainInputs} from "../../../data/accountMainInputsData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addAccountMain, editAccountMain} from "../../../api/accountMainApi";
import {toast} from "react-toastify";
import formStore from "../../../zustand/formStore";
import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup} from "../../../api/codingKind";
import useStore from "../../../zustand/store";

const EditMainForm = ({apiData , mainId}) => {
    const accountCodingKindId = useStore(state => state.codingKindId)
    const instinct = formStore(state => state.instinct)
    const type = formStore(state => state.type)
    const [loading, setLoading] = useState(false);
    const typeButton = formStore(state => state.typeButton)
    const instinctButton = formStore(state => state.instinctButton)
    const updateInstinct = formStore(state => state.updateInstinct)
    const updateType = formStore(state => state.updateType)
    const {data} = useQuery(['accountsGroups'] , ()=>getAllAccountGroup(accountCodingKindId))

    useEffect(() => {
        updateType(apiData?.data.accountMains[0].type.toString())
        updateInstinct(apiData?.data.accountMains[0].instinct.toString())
    }, [apiData]);

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
        const res = await editAccountMain(mainId , data , Number(instinct) , Number(type)).catch(() => {
            toast.error("ویرایش انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            reset()
            toast.success("ویرایش با موفقیت انجام شد")
            setLoading(false)
        }
    }

    return(
        <form onSubmit={handleSubmit(onFormSubmit)} className={"w-full pt-5"}>
            <SelectInput label={'گروه حساب'} type={'account-group'} register={register}
                         data={data && data.data.accountGroups} selectValue={apiData?.data.accountMains[0].accountGroupName}/>
            <div className={"flex flex-row gap-3 mt-6 w-full"}>
                {
                    instinctButton.map((items, index) => (
                        <div key={items.id + index} onClick={() => updateInstinct(items.value)}
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
                    addAccountMainInputs.map((item, index) => (
                        <Inputs type={item.type}
                                iClass={item.width}
                                key={"input-value" + index}
                                error={errors[item.inputName] ? errors[item.inputName].message : false}
                                register={register}
                                name={item.inputName}
                                label={item.inputLabel}
                                inputType={item.inputType} defaultValue={
                                index === 0 ?
                                    apiData.data.accountMains[0].accountMainCode
                                : index === 1 ?
                                        apiData.data.accountMains[0].accountMainName :""}/>
                    ))
                }
            </div>
            <div className={"flex flex-row gap-3 mt-6 w-full"}>
                {
                    typeButton.map((items, index) => (
                        <div key={items.id + index} onClick={() => updateType(items.value)}
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
                                <Spinner color={"blue"}/>
                                {"ویرایش"}
                            </p>
                            : "ویرایش"
                    }
                </Buttons>
            </div>
        </form>
    )
}

export default EditMainForm