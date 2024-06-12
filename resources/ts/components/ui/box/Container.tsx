import React from 'react';
import {ContainerType} from "@/ts/components/ui/box/_type";

const Container = (props: ContainerType) => {
	return (
		<div className="max-w-[1280px] min-w-[360px] mx-auto flex min-h-[calc(100vh_-_120px)]">
			{props.children}
		</div>
	);
};

export default Container;
