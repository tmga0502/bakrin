import React from 'react';
import {useFormContext} from "react-hook-form";
import FormGroup from "@/ts/components/ui/form/FormGroup/FormGroup";
import FormLabel from "@/ts/components/ui/form/FormLabel/FormLabel";
import { FileFieldType } from './FileField.type';

const FileField: React.FC<FileFieldType> = ({label, id, helper}) => {
	const {register} = useFormContext();
	return (
		<FormGroup>
			<FormLabel label={label} htmlFor={id}/>
			<input type={'file'} className="fileStyle" id={id} {...register(id)}/>
			{helper && (
				<p className={'text-xs pt-2'}>{helper}</p>
			)}
		</FormGroup>
	)
}

export default FileField;
