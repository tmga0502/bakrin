import React, { ReactNode } from 'react'
import {useRecoilValue} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";

export const IsLoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const isLoading = useRecoilValue(IsLoadingStates)
	console.log(isLoading)

    return (
		<>
            { children }
			{isLoading && (
				<PageLoader/>
			)}
		</>
    )
}
