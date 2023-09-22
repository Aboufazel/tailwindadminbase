import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthLayouts from "../layouts/authLayouts";
import SignUp from "../layouts/auth/signUp";
import AuthProvider from "../services/authProvider";
import Admin from "../layouts/main/admin";
import MainLayouts from "../layouts/mainLayouts";

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
                    path: '/main',
                    element: (
                        <AuthProvider>
                            <Admin/>
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