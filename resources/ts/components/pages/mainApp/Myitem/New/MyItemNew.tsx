import {MainAppLayout} from "@/ts/components/ui/layout";
import React from "react";
import Form from "@/ts/components/pages/mainApp/Myitem/New/features/Form/Form";

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
