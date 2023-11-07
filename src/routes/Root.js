import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthLayouts from "../layouts/authLayouts";
import SignUp from "../layouts/auth/signUp";
import AuthProvider from "../services/authProvider";
import Admin from "../layouts/main/admin";
import MainLayouts from "../layouts/mainLayouts";
import {routes} from "../data/routes";
import UserList from "../layouts/userList/userList";
import BusinessLayout from "../layouts/business/businessLayout";
import DefineLayout from "../layouts/define/defineLayout";
import CreateNewCoding from "../layouts/define/createNewCoding";

const Root = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<AuthLayouts/>,
            children: [
                {
                    path: '/signUp',
                    element: <SignUp/>
                }
            ],
        },
        {
            path:'/',
            element:<MainLayouts/>,
            children:[
                {
                    path: routes.main,
                    element: (
                        <AuthProvider>
                            <Admin/>
                        </AuthProvider>
                    )
                },{
                path: routes.userList,
                element: (
                    <AuthProvider>
                        <UserList/>
                    </AuthProvider>
                )
                },{
                path: routes.business,
                element:(
                    <AuthProvider>
                        <BusinessLayout/>
                    </AuthProvider>
                )
                },{
                    path: routes.createCoding,
                    element:(
                        <AuthProvider>
                            <CreateNewCoding/>
                        </AuthProvider>
                    )
                }
            ]
        }
    ])

    return(
        <RouterProvider router={router}/>
    )
}


export default Root;