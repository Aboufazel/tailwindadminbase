import {Category, Graph, Plus, Work} from "react-iconly";
import {routes} from "./routes";
export const adminSideMenuData = {
    "داشبورد":[
        {id:'dashboard' , icon:<Category set={"bulk"}/> , title:'داشبورد' , child:false, link: routes.main , subMenu:[]},
    ],
    "مدیریت کسب و کار":[
        {id:"business" , title:"کسب و کارها" , icon:<Work set={"bulk"}/> , link: routes.business ,  subMenu:[]}
    ],
    "مدل درآمدی":[
        {id:"business" , title:"مدل های درآمدی" , icon:<Graph set={"bulk"}/> , link: routes.revenueModel ,  subMenu:[]}
    ],
    "تعریف کدینگ":[
        {id:"coding-new-accounting" , title:"حسابداری جدید" , icon:<Plus set={"bulk"}/> , link:routes.createCoding ,  subMenu:[]},
    ],
}