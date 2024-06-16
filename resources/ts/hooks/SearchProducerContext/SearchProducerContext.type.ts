import {ProducerType} from "@/ts/types/ProducerType";
import React from "react";

export type SearchProducerContextType = {
	searchProducerName: string,
	setSearchProducerName: React.Dispatch<React.SetStateAction<any>>,
	searchPrefectureName: string,
	setSearchPrefectureName: React.Dispatch<React.SetStateAction<any>>,
	searchProducerResults: ProducerType[],
	setSearchProducerResults: React.Dispatch<React.SetStateAction<any>>,
}
