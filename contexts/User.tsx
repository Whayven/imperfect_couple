import React, {createContext, useState, useContext, useEffect} from 'react';
import {userService} from "../services/userService";
import {useAuth} from "./Auth";

import {User} from "../domain/user";
import {handleError} from "../utils";

type UserContextData = {
    userData?: User;
    loading: boolean;
    getUserData(token: string): Promise<void>;
    updateUserData(formData: User, token: string): Promise<void>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState<User>();

    const [loading, setLoading] = useState(true);


    const auth = useAuth();

    useEffect(() => {
        if (auth.authData?.token) getUserData(auth.authData.token).then(() => console.log('refreshed user data'));
    }, [auth.authData?.token]);

    const getUserData = async (token: string) => {
        const _userData = await userService.getUser(token).catch((error) => {
            handleError(error)
            return null;
        });
        setUserData(_userData);
    }

    const updateUserData = async (formData: User, token: string) => {
        await userService.updateUser(formData.id, formData, token).then((res) => {
            setUserData(res);
        }).catch((error) => {
            handleError(error)
            return null;
        });

    }

    return (
        <UserContext.Provider value={{userData, loading, getUserData, updateUserData}}>
            {children}
        </UserContext.Provider>
    );
}

function useUser(): UserContextData {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within an UserProvider');
    }
    return context;
}

export {UserContext, UserProvider, useUser};