import React, {Suspense} from 'react';
import {RecoilRoot} from 'recoil';
import {AuthProvider} from "./hooks/AuthContext";
import {IsLoadingProvider} from "./hooks/IsLoadingContext";
import Router from "./router/Router";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {QueryClient, QueryClientProvider} from "react-query";
import Loader from "@/react/app/mainApp/features/loader/Loader";

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
			<RecoilRoot>
				<IsLoadingProvider>
					<AuthProvider>
						<Suspense fallback={<Loader/>}>
							<Router/>
							<ToastContainer hideProgressBar={true}/>
						</Suspense>
					</AuthProvider>
				</IsLoadingProvider>
			</RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
