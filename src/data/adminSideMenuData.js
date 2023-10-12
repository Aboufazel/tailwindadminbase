import {Category, Filter, User} from "react-iconly";

export const adminSideMenuData = [
    {id:'dashboard' , icon:<Category set={"bulk"}/> , title:'داشبورد' , child:false , subMenu:[]},
    {id:'adminSetting' , icon:<Filter set={"bulk"}/> , title:'تنظیمات پنل' , child:true , subMenu:[]},
    {id:'userList' , icon:<User set={"bulk"}/> , title:'لیست کاربران' , child:false , subMenu:[]},
]