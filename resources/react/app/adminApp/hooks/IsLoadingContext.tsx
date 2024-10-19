import React, { ReactNode } from 'react'
import {useRecoilValue} from "recoil";
import {IsLoadingStates} from "@/react/app/adminApp/states/IsLoadingStates";
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";

export const IsLoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const isLoading = useRecoilValue(IsLoadingStates)

	return (
		<>
			{ children }
			{isLoading && (
				<PageLoader/>
			)}
		</>
	)
}
