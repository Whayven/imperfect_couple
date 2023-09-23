import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {basic} from '../styles/common';
import {useAuth} from "../contexts/Auth";


const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();

    const handleSubmit = () => {
        // Send formData to the server here
        auth.signIn({email, password}).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={basic.container}>
            <Text style={basic.text}>Sign In</Text>
            <TextInput
                style={basic.textInput}
                placeholder="Email"
                placeholderTextColor={'#FFD700'}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={basic.textInput}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={'#FFD700'}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={basic.button} onPress={handleSubmit}>
                <Text style={basic.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
};

export default SignupScreen;
