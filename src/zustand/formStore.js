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
    type:'',
    instinct: '',
    updateInstinct:(instinct) => set(() => ({ instinct: instinct })),
    updateType:(type)=>set(()=>({type:type}))
}))

export default formStore