import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react'

type IsLoadingContextType = {
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

const IsLoadingContext = createContext<IsLoadingContextType>({
    isLoading: false,
    setIsLoading: () => {}
})

export const IsLoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
            { children }
        </IsLoadingContext.Provider>
    )
}

export const useIsLoading = (): IsLoadingContextType => useContext(IsLoadingContext);
