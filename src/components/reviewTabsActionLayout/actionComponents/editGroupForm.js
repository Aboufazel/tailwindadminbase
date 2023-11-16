import {addAccountGroupInputs} from "../../../data/accountGroupInputsData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {editAccountGroup} from "../../../api/accountGroupApi";
import {toast} from "react-toastify";
import useStore from "../../../zustand/store";
import useReviewTabStore from "../../../zustand/reviewTabStore";
import useAccountGroupStore from "../../../zustand/accountGroupStore";

const EditGroupForm = ({data}) => {
    const [loading, setLoading] = useState(false);
    const accountCodingKindId = useStore(state => state.codingKindId)
    const accountGroupId = useReviewTabStore(state => state.codingAccountGroupId)
    const manageEditGroupsStep = useAccountGroupStore(state => state.manageEditGroupStep)
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
        const res = await editAccountGroup(accountGroupId, data , accountCodingKindId).catch(() => {
            toast.error("ویرایش انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            toast.success("ویرایش با موفقیت انجام شد")
            reset()
            setLoading(false)
            manageEditGroupsStep()
        }
    }

    return(
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
                                inputType={item.inputType}
                                defaultValue={
                                    index === 0 ?
                                        data.data.accountGroups[0].accountGroupCode
                                        :
                                        index === 1 ? data.data.accountGroups[0].accountGroupName : ""
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
    )
}

export default EditGroupForm;