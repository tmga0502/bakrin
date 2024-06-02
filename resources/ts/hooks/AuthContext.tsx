import React, {createContext, useState, useContext, ReactNode, useEffect} from 'react'
import axios from "axios";
import {ProducerType} from "@/ts/types/ProducerType";

type AuthContextType = {
    isAuth: boolean
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
    userData: ProducerType | any; // ユーザー情報の型を適宜設定
    setUserData: React.Dispatch<React.SetStateAction<any>>;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    isAuth     : false,
    setIsAuth  : () => {
    },
    userData   : {}, // ユーザー情報の型を適宜設定
    setUserData: () => {
    },
    isLoading  : true
})

// const auth_check: boolean = sessionStorage.getItem('fanBaseUserAuthToken') !== null
export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 認証状態とユーザー情報を確認
        axios.get('/api/producers/getProducer')
            .then(response => {
                setIsAuth(true);
                setUserData(response.data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsAuth(false);
                setUserData({});
                setIsLoading(false);
            })
    }, []);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, userData, setUserData, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => useContext(AuthContext);
