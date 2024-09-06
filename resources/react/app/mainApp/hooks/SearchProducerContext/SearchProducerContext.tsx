import React, { createContext, useState, useContext, ReactNode } from 'react';
import {SearchProducerContextType} from "@/react/app/mainApp/hooks/SearchProducerContext/SearchProducerContext.type";
import {ProducerType} from "@/react/types/ProducerType";

const SearchProducerContext = createContext<SearchProducerContextType>({
	searchProducerName: '',
	setSearchProducerName:　()=>{},
	searchPrefectureName: '',
	setSearchPrefectureName: ()=>{},
	searchProducerResults: [],
	setSearchProducerResults: ()=>{}
});

export const useSearchProducer = () => useContext(SearchProducerContext);

export const SearchProducerProvider:React.FC<{ children: ReactNode }> = ({ children}) => {
	const [searchProducerName, setSearchProducerName] = useState('');
	const [searchPrefectureName, setSearchPrefectureName] = useState('');
	const [searchProducerResults, setSearchProducerResults] = useState<ProducerType[]>([]);

	return (
		<SearchProducerContext.Provider value={{ searchProducerName, setSearchProducerName, searchPrefectureName, setSearchPrefectureName, searchProducerResults, setSearchProducerResults }}>
			{children}
		</SearchProducerContext.Provider>
	);
};

export const useSearchProducerContext = (): SearchProducerContextType => useContext(SearchProducerContext);
