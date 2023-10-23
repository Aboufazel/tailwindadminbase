import {Bag, Category, Plus, Work, TwoUsers, Edit, Document, Buy} from "react-iconly";
import {routes} from "./routes";
export const adminSideMenuData = {
    "داشبورد":[
        {id:'dashboard' , icon:<Category set={"bulk"}/> , title:'داشبورد' , child:false, link: routes.main , subMenu:[]},
    ],
    "مدیریت کسب و کار":[
        {id:"business" , title:"کسب و کارها" , icon:<Bag set={"bulk"}/> , subMenu:[]}
    ],
    "حسابداری":[
        {id:"coding-jobs" , title:"جامع بازرگانی" , icon:<Work set={"bulk"}/> , subMenu:[]},
        {id:"coding-store" , title:"فروشگاهی" , icon:<Buy set={"bulk"}/> , subMenu:[]},
        {id:"coding-personal" , title:"حسابداری شخصی" , icon:<TwoUsers set={"bulk"}/> , subMenu:[]},
        {id:"coding-new-accounting" , title:"حسابداری جدید" , icon:<Plus set={"bulk"}/> , subMenu:[]},
    ],
    "مدیریت":[
        {id:"change-info" , title:"تغییر اطلاعات" , icon:<Document set={"bulk"}/> , subMenu:[]},
        {id:"change-userName" , title:"تغییر نام کاربری" , icon:<Edit set={"bulk"}/> , subMenu:[]},
    ],
}