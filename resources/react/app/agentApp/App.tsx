import React, {Suspense} from 'react';
import {RecoilRoot} from 'recoil';
import {AuthProvider} from "./hooks/AuthContext";
import {IsLoadingProvider} from "./hooks/IsLoadingContext";
import Router from "./router/Router";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {QueryClient, QueryClientProvider} from "react-query";
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";
import {ThemeProvider} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

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
				<Suspense fallback={<PageLoader/>}>
					<IsLoadingProvider>
						<AuthProvider>
							<ThemeProvider theme={theme}>
								<Router/>
								<ToastContainer hideProgressBar={true}/>
							</ThemeProvider>
						</AuthProvider>
					</IsLoadingProvider>
				</Suspense>
			</RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
