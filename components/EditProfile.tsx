import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {basic, form} from "../styles/common";
import {Picker} from "@react-native-picker/picker";
import {marriageStatus} from "../constants";
import {UserData} from "../domain/userData";

const EditProfile = ({user, updateUser, toggleForm, isEditMode, signOut}) => {
    const [id] = useState(user.id);
    const [username] = useState(user.username);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [city, setCity] = useState(user.city);
    const [state, setState] = useState(user.state);
    const [status, setStatus] = useState(user.status);
    const [profile_picture] = useState(user.profile_picture);

    const handleSubmit = () : void => {
        const formData: UserData = {
            id,
            username,
            name,
            email,
            city,
            state,
            phone,
            status,
            profile_picture
        };
        // Update User Data
        updateUser(formData);
    }

    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} style={form.scrollContainer}>
            <TextInput style={basic.textInput} placeholderTextColor={'#FFD700'} placeholder="Name" value={name}
                       onChangeText={(text) => setName(text)}/>
            <TextInput style={basic.textInput} placeholderTextColor={'#FFD700'} placeholder="Email" value={email}
                       onChangeText={(text) => setEmail(text)}/>
            <TextInput style={basic.textInput} placeholderTextColor={'#FFD700'} placeholder="Phone" value={phone}
                       onChangeText={(text) => setPhone(text)}/>
            <TextInput style={basic.textInput} placeholderTextColor={'#FFD700'} placeholder="City" value={city}
                       onChangeText={(text) => setCity(text)}/>
            <TextInput style={basic.textInput} placeholderTextColor={'#FFD700'} placeholder="State" value={state}
                       onChangeText={(text) => setState(text)}/>
            <View style={basic.textInput}>
                <Picker selectedValue={status} onValueChange={(itemValue) => setStatus(itemValue)}>
                    {marriageStatus.map((status) => (
                        <Picker.Item style={basic.textInput} key={status.label} label={status.label}
                                     value={status.value}/>
                    ))}
                </Picker>
            </View>
            <View style={form.buttonContainer}>
                <TouchableOpacity style={basic.button} onPress={() => {
                    handleSubmit();
                    toggleForm(!isEditMode);
                }}><Text
                    style={basic.buttonText}>Save</Text></TouchableOpacity>
                <TouchableOpacity style={basic.button} onPress={signOut}><Text style={basic.buttonText}>Sign Out</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default EditProfile;
