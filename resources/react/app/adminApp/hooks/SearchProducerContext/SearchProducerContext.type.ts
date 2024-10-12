import React from "react";
import {ProducerType} from "@/react/types/ProducerType";

export type SearchProducerContextType = {
	searchProducerName: string,
	setSearchProducerName: React.Dispatch<React.SetStateAction<any>>,
	searchPrefectureName: string,
	setSearchPrefectureName: React.Dispatch<React.SetStateAction<any>>,
	searchProducerResults: ProducerType[],
	setSearchProducerResults: React.Dispatch<React.SetStateAction<any>>,
}
