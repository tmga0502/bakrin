import React from 'react';
import {AuthProvider} from "./hooks/AuthContext";
import {IsLoadingProvider} from "./hooks/IsLoadingContext";
import Router from "./router/Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {QueryClient, QueryClientProvider} from "react-query";

const App: React.FC = () => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                refetchOnWindowFocus: false,
            },
            mutations: {
                retry: false
            }
        }
    })

    return (
        <IsLoadingProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Router />
                    <ToastContainer hideProgressBar={true}/>
                </QueryClientProvider>
            </AuthProvider>
        </IsLoadingProvider>
    );
}

export default App;
