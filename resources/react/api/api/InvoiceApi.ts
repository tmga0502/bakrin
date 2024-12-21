import axios from "axios";
import {InvoiceType} from "@/react/types/InvoiceType";

const getInvoice= async (month: string) => {
    const{ data } = await axios.get<InvoiceType>(`/api/invoice/getInvoice/${month}`);
    return data;
}

export {
	getInvoice,
}
