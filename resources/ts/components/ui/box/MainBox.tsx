import React from 'react';
import {MainType} from "@/ts/components/ui/box/_type";

const MainBox = (props: MainType) => {
	return (
		<div className="w-full md:w-[calc(100% - 250px)] p-4 mb-24">
			{props.children}
		</div>
	);
};

export default MainBox;
