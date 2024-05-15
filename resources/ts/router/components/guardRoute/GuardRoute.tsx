import React from 'react';
import {useAuth} from "@/ts/hooks/AuthContext";
import {Navigate} from "react-router-dom";
import {PropsType} from "@/ts/router/components/guardRoute/type";


const GuardRoute = (props : PropsType) => {
    const { isAuth } = useAuth()
    if(!isAuth) return<Navigate to="/login" />
    return <>{ props.component }</>
}

export default GuardRoute;
