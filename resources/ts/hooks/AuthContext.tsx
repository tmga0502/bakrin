import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react'

type AuthContextType = {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType>({
    isAuth: false,
    setIsAuth: () => {}
})

const auth_check = sessionStorage.getItem('auth_token') !== null
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(auth_check)

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => useContext(AuthContext);
