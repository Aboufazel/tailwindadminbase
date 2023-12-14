import {create} from "zustand";

const formStore = create((set)=>({
    typeButton:[
        {id:'always' , title:'دائم', value:'1'},
        {id:'temporary' , title:'موقت', value:'0'},
    ],
    instinctButton:[
        {id:'debtor' , title:'بدهکار', value:'0'},
        {id:'creditor' , title:'بستانکار', value:'1'},
    ],
    canDeleteButton:[
        {id:'canDelete' , title:'اختیاری', value:'0'},
        {id:'cantDelete' , title:'اجباری', value:'1'},
    ],
    floatButton:[
        {id:'isFloat' , title:'شناور' , value:true},
        {id:'notFloat' , title:'غیر شناور' , value:false},
    ],
    automaticButton:[
        {id:'automatic' , title:'اتوماتیک' , value:true},
        {id:'notAutomatic' , title:'غیراتوماتیک' , value:false},
    ],
    type:'',
    instinct: '',
    isFloat:'',
    isAutomatic:'',
    accountTypeIsActive:'',
    updateAccountTypeIsActive:(accountTypeIsActive) => set(() => ({ accountTypeIsActive: accountTypeIsActive })),
    updateIsFloat:(isFloat) => set(() => ({ isFloat: isFloat })),
    updateIsAutomatic:(isAutomatic) => set(() => ({ isAutomatic: isAutomatic })),
    updateInstinct:(instinct) => set(() => ({ instinct: instinct })),
    updateType:(type)=>set(()=>({type:type}))
}))

export default formStore