import React from "react";

type ModalTitleType = {
	title    : string,
}

const ModalTitle: React.FC<ModalTitleType> = ({title}) => {
	return(
		<div>
			<div className={'px-4 py-2 border-b border-b-lightGray bg-mainGreen text-white rounded-t-md'}>
				{title}
			</div>
		</div>
	)
}

export default ModalTitle
