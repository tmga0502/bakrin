import {useQuery} from "react-query";
import * as api from "@/react/api/api/InvoiceApi";


const useGetInvoice = (month: string) => {
    return useQuery(['invoice', month], ()=>api.getInvoice(month),{
		suspense: true,
	})
}

export {
    useGetInvoice,
}
