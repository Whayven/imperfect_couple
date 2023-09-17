import React from 'react';
import Router from './routes/Router';
import {AuthProvider} from "./contexts/Auth";

export default function App() {
    // @ts-ignore
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
}


