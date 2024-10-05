import React, {ReactNode} from 'react'
import {usAuthProducerCheck} from "@/react/api/query/AuthProducerQuery";


export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
	usAuthProducerCheck()

	return(
		<>{children}</>
	)
}

