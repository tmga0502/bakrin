import React from "react";

type ModalTitleType = {
	title    : string,
}

const ModalTitle: React.FC<ModalTitleType> = ({title}) => {
	return(
		<div>
			<div className={'p-4 border-b border-b-lightGray bg-mainGreen text-white rounded-t-md'}>
				{title}
			</div>
		</div>
	)
}

export default ModalTitle
