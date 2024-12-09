import axios from "axios";

const create = async (formData: any) => {
	const{ data } = await axios.post('/api/shipping_info/create', formData);
	return data;
}

export {
	create,
}
