import {Bag, Category, Plus , Edit, Document} from "react-iconly";
import {routes} from "./routes";
export const adminSideMenuData = {
    "داشبورد":[
        {id:'dashboard' , icon:<Category set={"bulk"}/> , title:'داشبورد' , child:false, link: routes.main , subMenu:[]},
    ],
    "مدیریت کسب و کار":[
        {id:"business" , title:"کسب و کارها" , icon:<Bag set={"bulk"}/> , link: routes.business ,  subMenu:[]}
    ],
    "کدینگ حسابداری":[
        {id:"coding-new-accounting" , title:"حسابداری جدید" , icon:<Plus set={"bulk"}/> , subMenu:[]},
    ],
    "مدیریت":[
        {id:"change-info" , title:"تغییر اطلاعات" , icon:<Document set={"bulk"}/> , subMenu:[]},
        {id:"change-userName" , title:"تغییر نام کاربری" , icon:<Edit set={"bulk"}/> , subMenu:[]},
    ],
}