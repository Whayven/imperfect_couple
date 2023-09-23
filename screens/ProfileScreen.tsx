import React, {useState, useEffect} from 'react';
import {View, Image, Alert} from 'react-native';

import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import Message from "../components/Message";

import {useAuth} from "../contexts/Auth";
import {useUser} from "../contexts/User";

import {handleError, useIsMount} from "../utils";

import {basic, form, profile} from '../styles/common';

import {API_URL, AVATAR_API} from "../constants";
import {UserData} from "../domain/userData"

const ProfileScreen = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState<UserData>();
    const avatar = `${API_URL}${user?.profile_picture}` || `${AVATAR_API}/${user.username}`;


    const auth = useAuth();
    const userContext = useUser();

    const isMount = useIsMount();

    const handleSignOut = () => {
        auth.signOut();
    }

    const handleUserUpdate = (formData: UserData) => {
        setUser({...user, ...formData});
    }

    useEffect(() => {
        userContext.userData && setUser(userContext.userData);
    }, []);

    useEffect(() => {
        // Update User Data After Edit
        if (!isEditMode && !isMount) {
            const data = {
                ...user,
            };
            if (typeof data.profile_picture === 'string') {
                console.log('deleting profile picture')
                delete data.profile_picture;
            }
            userContext.updateUserData(data, auth.authData.token).then(() => {
                setMessage('User Updated Successfully!')
                setDisplayMessage(true);
            }).catch((error) => {
                handleError(error)
                setMessage(error.message)
                setDisplayMessage(true);
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
        <View style={isEditMode ? form.formContainer : profile.profileInfo}>
            <View style={profile.profileContainer}>
                {
                    displayMessage &&
                    <Message message={message} displayMessage={displayMessage} setDisplayMessage={setDisplayMessage}/>
                }

                <Image source={{uri: avatar}}
                       style={{width: 100, height: 100, borderRadius: 100, margin: 20, resizeMode: 'contain'}}/>
                {isEditMode ? <EditProfile user={user} updateUser={handleUserUpdate} toggleForm={setIsEditMode}
                                           isEditMode={isEditMode} signOut={handleSignOut}/> :
                    <Profile user={user} toggleForm={setIsEditMode} isEditMode={isEditMode} signOut={handleSignOut}/>}
            </View>
        </View>
    );
};

export default ProfileScreen;
