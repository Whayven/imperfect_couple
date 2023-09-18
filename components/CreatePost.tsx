import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from "react-native";

import {basic, form} from "../styles/common";

import {useAuth} from "../contexts/Auth";
import {useUser} from "../contexts/User";
import {handleError} from "../utils";
import {postService} from "../services/postService";
import {Post} from "../domain/post";

const CreatePost = () => {
    const [content, setContent] = useState('');

    const auth = useAuth();
    const user = useUser();

    const handleSubmit = () => {
        const post : Post = {
            id: undefined,
            content: content,
            posted_by: user.userData,
            created_at: null,
        }
        // Send formData to the server here
        postService.createPost(post, auth.authData?.token).then((response) => {
            console.log(response)
            setContent('')
        }
        ).catch((error) => {
            handleError(error)
        })
    }

    return (
        <>
            <TextInput
                style={form.bigTextInput}
                placeholder="Share Your Thoughts"
                placeholderTextColor={'#FFD700'}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity style={basic.button} onPress={handleSubmit}><Text
                style={basic.buttonText}>Create</Text></TouchableOpacity>
        </>
    );
}

export default CreatePost;
