import React, {useEffect, useState} from 'react';
import {EditPagePropsType} from "@mainFeatures/myItem/types";
import EditForm from "@mainFeatures/myItem/components/EditForm/EditForm";
import {useSetRecoilState} from "recoil";
import {FormVarietiesStates} from "@mainFeatures/myItem/states/formStates";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";

const MyItemEditContents: React.FC<EditPagePropsType> = (props) => {
	const setFormVarietiesStates = useSetRecoilState(FormVarietiesStates)
	const [components, setComponents] = useState(<ContentsLoader/>)

	useEffect(()=>{
		const varietyArray = props.varietiesData.filter(item => String(item.categoryId) === String(props.itemData.categoryId))
		setFormVarietiesStates(varietyArray)
		setComponents(<EditForm {...props}/>)
	},[])

	return (
		<>
			{components}
		</>
	);
};

export default MyItemEditContents;
