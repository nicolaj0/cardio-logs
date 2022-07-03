import React, {useState} from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {Dashboard} from "./components/Dashboard";
import {Search} from "./components/Search";

export const queryClient = new QueryClient()

function App() {
    const [patientFilter, setPatientFilter] = useState('');
    return (
        <QueryClientProvider client={queryClient}>
            <Search onChange={(e) => setPatientFilter(e)}/>
            <Dashboard filter={patientFilter}/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;

