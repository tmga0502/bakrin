import React, {ReactNode} from 'react'
import {usAuthAgentCheck} from "@/react/api/query/AuthAgentQuery";


export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
	usAuthAgentCheck()

	return(
		<>{children}</>
	)
}

