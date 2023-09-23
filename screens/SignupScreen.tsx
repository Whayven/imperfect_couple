import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {basic, form} from '../styles/common';
import {Picker} from '@react-native-picker/picker';

import {marriageStatus} from "../constants";
import {useAuth} from "../contexts/Auth";
import {handleError} from "../utils";

const SignupScreen = () => {
    const [step, setStep] = useState(1); // [1, 2]
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [status, setStatus] = useState('Single');

    const auth = useAuth();

    const handleSubmit = () => {
        const formData = {
            name,
            city,
            state,
            phone,
            status,
            username,
            email,
            password,
        };
        // Send formData to the server here
        auth.signUp(formData)
            .catch((error) => {
            handleError(error);
            const errors = error.response.data.error.details.errors;
            if (errors) {
                for (let key in errors) {
                    console.log(key, errors[key]);
                }
            }
        });
    };

    return (
        <View style={form.formContainer}>
            <Text style={basic.text}>Create Your Account</Text>
            {step === 1 ? (<>
                <TextInput
                    style={basic.textInput}
                    placeholder="Name"
                    placeholderTextColor={'#FFD700'}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={basic.textInput}
                    placeholder="Phone"
                    placeholderTextColor={'#FFD700'}
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                />
                <TextInput
                    style={basic.textInput}
                    placeholder="City"
                    placeholderTextColor={'#FFD700'}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                />
                <TextInput
                    style={basic.textInput}
                    placeholder="State"
                    placeholderTextColor={'#FFD700'}
                    value={state}
                    onChangeText={(text) => setState(text)}
                />
                <View style={basic.textInput}>
                    <Picker selectedValue={status} onValueChange={(itemValue) => setStatus(itemValue)}>
                        {marriageStatus.map((status) => (
                            <Picker.Item style={basic.textInput} key={status.label} label={status.label}
                                         value={status.value}/>
                        ))}
                    </Picker>
                </View></>) : (<>
                <TextInput
                    style={basic.textInput}
                    placeholder="Username"
                    placeholderTextColor={'#FFD700'}
                    value={username}
                    onChangeText={(text) => setUserName(text)}
                />
                <TextInput
                    style={basic.textInput}
                    placeholder="Email"
                    placeholderTextColor={'#FFD700'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={basic.textInput}
                    passwordRules={'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={'#FFD700'}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </>)}
            {
                step === 1 ? (<TouchableOpacity style={basic.button} onPress={() => setStep(2)}>
                    <Text style={basic.buttonText}>Next</Text></TouchableOpacity>) : (<View style={form.buttonContainer}>
                    <TouchableOpacity style={basic.button} onPress={() => setStep(1)}>
                        <Text style={basic.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={basic.button} onPress={handleSubmit}>
                        <Text style={basic.buttonText}>Signup</Text>
                    </TouchableOpacity>
                </View>)
            }
        </View>
    );
};

export default SignupScreen;
