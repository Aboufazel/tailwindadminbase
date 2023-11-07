export const addAccountCodingKindInputs = [
    {
        inputLabel:"نام کدینگ *",
        inputPlaceholder:"نام کدینگ را وارد نمایید...",
        required:true,
        type:"input",
        inputType:"text",
        inputName:"accountCodingKindName",
        width:'w-1/2'
    },{
        inputLabel:"کد *",
        inputPlaceholder:"کد را وارد نمایید...",
        required:true,
        type:"input",
        inputType:"text",
        inputName:"accountCodingKindCode",
        width:'w-1/2'
    },{
        inputLabel:"توضیحات کدینگ",
        inputPlaceholder:"نوشتن توضیحات...",
        required:false,
        type:"input",
        inputType:"textarea",
        inputName:"accountCodingKindDesc",
        width:'w-full'
    },
]