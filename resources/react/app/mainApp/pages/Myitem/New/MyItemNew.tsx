import React from "react";
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import Form from "@/react/app/mainApp/pages/Myitem/New/features/Form/Form";

const MyItemNewPage = () => {
	return (
		<MainAppLayout>
			<div className="max-w-[500px] mx-auto mb-48">
				<Form/>
			</div>
		</MainAppLayout>
	);
};

export default MyItemNewPage;
