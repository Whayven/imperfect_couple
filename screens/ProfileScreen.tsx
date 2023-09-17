import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Profile from "../components/Profile";
import {useAuth} from "../contexts/Auth";
import {basic, form} from '../styles/common';

import {AVATAR_API} from "../constants";

const ProfileScreen = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [user, setUser] = useState({});

    const auth = useAuth();

    const handleSignOut = () => {
        auth.signOut();
    }


    return (
        <View style={basic.container}>
            <Image source={{uri: `${AVATAR_API}/WF`}} style={{width: 100, height: 100,  borderRadius: 100, margin: 20}}/>
            <Profile user={user}/>
            <View style={form.buttonContainer}>
            <TouchableOpacity style={basic.button} onPress={() => setIsEditMode(!isEditMode)}><Text
                style={basic.buttonText}>{isEditMode ? "Save" : "Edit"}</Text></TouchableOpacity>
            <TouchableOpacity style={basic.button} onPress={handleSignOut}><Text style={basic.buttonText}>Sign Out</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileScreen;
