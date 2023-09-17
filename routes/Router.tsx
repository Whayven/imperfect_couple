import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {AppStack, AuthStack} from "./routes";
import {useAuth} from '../contexts/Auth';
import {Loading} from '../components/Loading';

const Router = () => {
    const {authData, loading} = useAuth();

    if (loading) {
        return <Loading />;
    }
    return (
        <NavigationContainer>
            {authData ? (
                <AuthStack/>
            ) : (
                <AppStack/>
            )
            }
        </NavigationContainer>
    )
}

export default Router;
