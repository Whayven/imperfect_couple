import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

import {basic, form} from '../styles/common';

const Profile = ({user, toggleForm, isEditMode, signOut}) => {
    return (
        <>
            <View>
                <View style={basic.textContainer}>
                    <Text style={basic.text}>Name:</Text>
                    <Text style={basic.basicText}>{user?.name}</Text>
                </View>
                <View style={basic.textContainer}>
                    <Text style={basic.text}>Email:</Text>
                    <Text style={basic.basicText}>{user?.email}</Text>
                </View>
                <View style={basic.textContainer}>
                    <Text style={basic.text}>Phone:</Text>
                    <Text style={basic.basicText}>{user?.phone}</Text>
                </View>
                <View style={basic.textContainer}>
                    <Text style={basic.text}>City:</Text>
                    <Text style={basic.basicText}>{user?.city}</Text>
                </View>
                <View style={basic.textContainer}>
                    <Text style={basic.text}>State:</Text>
                    <Text style={basic.basicText}>{user?.state}</Text>
                </View>
                <View style={basic.textContainer}>
                    <Text style={basic.text}>Status:</Text>
                    <Text style={basic.basicText}>{user?.status}</Text>
                </View>
            </View>
            <View style={form.buttonContainer}>
                <TouchableOpacity style={basic.button} onPress={() => {
                    toggleForm(!isEditMode);
                }}><Text
                    style={basic.buttonText}>{"Edit"}</Text></TouchableOpacity>
                <TouchableOpacity style={basic.button} onPress={signOut}><Text style={basic.buttonText}>Sign Out</Text></TouchableOpacity>
            </View>
        </>

    )
}

export default Profile;
