import React from "react";
import Storage from "./storage";
import {Navigate} from "react-router-dom";
import {routes} from "../data/routes";


const AuthProvider = ({children}) => {
    const storage = Storage()

    if (!storage.accessToken) {
        return <Navigate to={routes.login} />;
    }
    return (
        <>
         {children}
        </>
    )

};

export default AuthProvider;
