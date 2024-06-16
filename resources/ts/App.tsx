import React from 'react';
import {AuthProvider} from "./hooks/AuthContext";
import {IsLoadingProvider} from "./hooks/IsLoadingContext";
import Router from "./router/Router";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {SearchProducerProvider} from "@/ts/hooks/SearchProducerContext/SearchProducerContext";

const App: React.FC = () => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries  : {
                retry               : false,
                refetchOnWindowFocus: false,
            },
            mutations: {
                retry: false
            }
        }
    })

    return (
        <QueryClientProvider client={queryClient}>
            <IsLoadingProvider>
                <AuthProvider>
					<SearchProducerProvider>
						<Router/>
						<ToastContainer hideProgressBar={true}/>
					</SearchProducerProvider>
                </AuthProvider>
            </IsLoadingProvider>
        </QueryClientProvider>
    );
}

export default App;
