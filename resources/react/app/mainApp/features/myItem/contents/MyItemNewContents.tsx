import React from 'react';
import {NewPagePropsType} from "@mainFeatures/myItem/types";
import {CreateForm} from "@mainFeatures/myItem/components";

const MyItemNewContents:React.FC<NewPagePropsType> = (props) => {
	return (
		<CreateForm {...props}/>
	);
};

export default MyItemNewContents;
