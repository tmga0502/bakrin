import React, {forwardRef} from 'react';
import {FileFieldType} from "./FileField.type";
import {FileInputStyle} from './FileField.styles';

const FileField = forwardRef<HTMLInputElement, FileFieldType>((props, ref) => {
	return (
		<input type={'file'} css={FileInputStyle} ref={ref} {...props} />
	);
});

export default FileField;
