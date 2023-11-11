import {create} from "zustand";

const formStore = create((set)=>({
    typeButton:[
        {id:'always' , title:'دائم', value:'1'},
        {id:'temporary' , title:'موقت', value:'0'},
    ],
    instinctButton:[
        {id:'debtor' , title:'بدهکار', value:'1'},
        {id:'creditor' , title:'بستانکار', value:'2'},
    ],
    floatButton:[
        {id:'isFloat' , title:'شناور' , value:'1'},
        {id:'notFloat' , title:'غیر شناور' , value:'0'},
    ],
    automaticButton:[
        {id:'automatic' , title:'اتوماتیک' , value:'1'},
        {id:'notAutomatic' , title:'غیراتوماتیک' , value:'0'},
    ],
    type:'',
    instinct: '',
    isFloat:'',
    isAutomatic:'',
    updateIsFloat:(isFloat) => set(() => ({ isFloat: isFloat })),
    updateIsAutomatic:(isAutomatic) => set(() => ({ isAutomatic: isAutomatic })),
    updateInstinct:(instinct) => set(() => ({ instinct: instinct })),
    updateType:(type)=>set(()=>({type:type}))
}))

export default formStore