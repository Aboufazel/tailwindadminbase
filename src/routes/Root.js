import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthLayouts from "../layouts/authLayouts";
import SignUp from "../layouts/auth/signUp";

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
        }
    ])

    return(
        <RouterProvider router={router}/>
    )
}


export default Root;