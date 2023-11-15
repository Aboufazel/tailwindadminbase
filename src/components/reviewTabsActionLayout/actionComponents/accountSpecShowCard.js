import Buttons from "../../globals/Buttons";
import React from "react";

const AccountSpecShowCard = ({data}) =>{

    return(
        <div className={"flex flex-row items-center w-full my-5 border-primary-main/10 border-b pb-3"}>
            <div className={"w-1/2"}>
                <p className={'flex flex-row text-[14px] text-text-color-1 items-center gap-3'}>
                    {data.accountSpecName}
                    <span className={'bg-red-500/10 px-4 py-1 rounded-[3px] text-text-color-1'}>
                            {'اجباری'}
                        </span>
                </p>
                <p className={'text-[12px] text-text-color-2 mt-2'}>آدرس حساب</p>
            </div>
            <div className={"flex flex-row items-center gap-3 w-full justify-end"}>
                <Buttons light={true} color={'danger'}>حذف</Buttons>
                <Buttons light={true} color={'warning'}>ویرایش</Buttons>
            </div>
        </div>
    )
}

export default AccountSpecShowCard;