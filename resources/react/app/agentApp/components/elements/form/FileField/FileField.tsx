import React, {forwardRef} from 'react';

type FileFieldType =  React.InputHTMLAttributes<HTMLInputElement>

const FileField = forwardRef<HTMLInputElement, FileFieldType>((props, ref) => {
	return (
		<input type={'file'} className={'fileStyle'} ref={ref} {...props} />
	);
});

export default FileField;
