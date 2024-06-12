import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';


interface ItemShowModeContextType {
    mode: 'view' | 'request',
    setMode: Dispatch<SetStateAction<'view' | 'request'>>
}

const ItemShowModeContext = createContext<ItemShowModeContextType >({
    mode: 'view',
    setMode: () => {}
});

interface DataProviderProps {
    children: ReactNode,
}

export const ItemShowModeProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<'view' | 'request'>('view')

    return (
        <ItemShowModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ItemShowModeContext.Provider>
    );
};

export const useItemShowMode = (): ItemShowModeContextType => useContext(ItemShowModeContext);
