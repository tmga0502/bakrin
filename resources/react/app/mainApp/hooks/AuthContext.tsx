import React, {ReactNode} from 'react'
import {usAuthUserCheck} from "@/react/api/query/AuthUserQuery";


export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
	usAuthUserCheck()

	return(
		<>{children}</>
	)
}

