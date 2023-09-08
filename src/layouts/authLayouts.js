import {Outlet} from "react-router-dom";
import React from "react";
const AuthLayouts = () => {

    return(
        <React.Fragment>
            <p>welcome to admin</p>
            <Outlet/>
        </React.Fragment>
    )
}


export default AuthLayouts;