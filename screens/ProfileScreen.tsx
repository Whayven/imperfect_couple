import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";

import {useAuth} from "../contexts/Auth";
import {useUser} from "../contexts/User";

import {useIsMount} from "../utils";

import {basic, form} from '../styles/common';

import {AVATAR_API} from "../constants";
import {User} from "../domain/user"

const ProfileScreen = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [user, setUser] = useState<User>();


    const auth = useAuth();
    const userContext = useUser();

    const isMount = useIsMount();

    const handleSignOut = () => {
        auth.signOut();
    }

    const handleUserUpdate = (user: User) => {
        setUser(user);
    }

    useEffect(() => {
        userContext.userData && setUser(userContext.userData);
    }, []);

    useEffect(() => {
        // Update User Data After Edit
        if (!isEditMode && !isMount) {
            userContext.updateUserData(user, auth.authData.token).then(() => {
                console.log('updated user');
            });
        }
    }, [isEditMode]);

    useEffect(() => {
        // Update User when userContext.userData changes
        if (userContext.userData) {
            setUser(userContext.userData);
        }
    }, [userContext.userData]);

    return (
        <View style={isEditMode ? form.formContainer : basic.container}>
            <Image source={{uri: `${AVATAR_API}/WF`}} style={{width: 100, height: 100, borderRadius: 100, margin: 20}}/>
            {isEditMode ? <EditProfile user={user} updateUser={handleUserUpdate} toggleForm={setIsEditMode}
                                       isEditMode={isEditMode} signOut={handleSignOut}/> :
                <Profile user={user} toggleForm={setIsEditMode} isEditMode={isEditMode} signOut={handleSignOut}/>}
        </View>
    );
};

export default ProfileScreen;
