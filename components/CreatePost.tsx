import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from "react-native";

import {basic, form} from "../styles/common";

import {useAuth} from "../contexts/Auth";
import {useUser} from "../contexts/User";
import {handleError} from "../utils";
import {postService} from "../services/postService";
import {Post} from "../domain/post";

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
