import React from 'react';
import Router from './routes/Router';
import {AuthProvider} from "./contexts/Auth";
import {UserProvider} from "./contexts/User";

export default function App() {
    // @ts-ignore
    return (
        <AuthProvider>
            <UserProvider>
                <Router/>
            </UserProvider>
        </AuthProvider>
    );
}


