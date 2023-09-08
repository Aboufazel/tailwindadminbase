import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthLayouts from "./layouts/authLayouts";
import Login from "./layouts/auth/login";
import SignUp from "./layouts/auth/signUp";

const Root = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<AuthLayouts/>,
            children: [
                {
                    path: '/login',
                    element: <Login/>
                }, {
                    path: '/signUp',
                    element: <SignUp/>
                }
            ]
        }
    ])

    return(
        <RouterProvider router={router}/>
    )
}


export default Root;