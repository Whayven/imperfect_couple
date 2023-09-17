import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {AuthData, RegisterData, authService} from '../services/authService';

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn({email, password}: { email: string, password: string }): Promise<void>;
    signUp(formData: RegisterData): Promise<void>;
    signOut(): void;
};

//Create the Auth Context with the data type specified and an empty object as initial value
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();

    //the AuthContext start with loading equals true
    //and stay like this, until the data be load from Async Storage
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Every time the App is opened, this provider is rendered
        //and call de loadStorage function.
        loadStorageData().then(() => console.log('loaded'));
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            //Try to get the data from Async Storage
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            console.log(authDataSerialized)
            if (authDataSerialized) {
                //If there are data, it's converted to an Object and the state is updated.
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
        } finally {
            //loading finished
            setLoading(false);
        }
    }

    const signIn = async ({email, password}: { email: string, password: string }) => {
        //call the service passing credential (email and password).
        //In a real App this data will be provided by the user from some InputText components.
        const _authData = await authService.signIn(
            email,
            password,
        ).catch((error) => {
            const errors = error.response.data.error.details.errors;
            if (errors) {
                for (let key in errors) {
                    console.log(key, errors[key]);
                }
            }
            return null;
        });
        console.log(_authData)

        //Set the data in the context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(_authData);


        //Persist the data in the Async Storage
        //to be recovered in the next user session.
        await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    };

    const signUp = async (formData: RegisterData) => {
        const _authData = await authService.signUp(formData).catch((error) => {
            const errors = error.response.data.error.details.errors;
            if (errors) {
                for (let key in errors) {
                    console.log(key, errors[key]);
                }
            }
            return null;
        });
        //Set the data in the context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(_authData);

        //Persist the data in the Async Storage
        //to be recovered in the next user session.
        await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    }

    const signOut = async () => {
        //Remove data from context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(undefined);

        //Remove the data from Async Storage
        //to NOT be recovered in next session.
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        //This component will be used to encapsulate the whole App,
        //so all components will have access to the Context
        <AuthContext.Provider value={{authData, loading, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export {AuthContext, AuthProvider, useAuth};
