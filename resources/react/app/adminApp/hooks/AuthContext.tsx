import React, {ReactNode} from 'react'
import {usAuthAdminCheck} from "@/react/api/query/AuthAdminQuery";


export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
	usAuthAdminCheck()

	return(
		<>{children}</>
	)
}

