import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from "react-native";

import {basic, form} from "../styles/common";

const CreatePost = ({createPost}) => {
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        createPost(content);
        setContent('');
    }

    return (
        <>
            <TextInput
                style={form.bigTextInput}
                placeholder="Share your thoughts..."
                placeholderTextColor={'#FFD700'}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity style={basic.button} onPress={handleSubmit}><Text
                style={basic.buttonText}>Share</Text></TouchableOpacity>
        </>
    );
}

export default CreatePost;
