import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import SearchProducer from "@/react/app/mainApp/features/search/search-producer";

const SearchProducerPage = () => {
	return (
		<MainLayout>
			<SearchProducer/>
		</MainLayout>
	);
};

export default SearchProducerPage;
