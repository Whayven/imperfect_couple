import React, {useState} from 'react';
import {TextInput} from "react-native";

import {basic, form} from "../styles/common";
import {Button, Icon} from "react-native-elements";

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
                multiline={true}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                icon={
                    <Icon
                        name="send"
                        size={15}
                        color="black"
                        style={basic.buttonIcon}
                    />
                }
                title="Post"
                onPress={handleSubmit}
                buttonStyle={basic.button}
                titleStyle={basic.buttonText}
            />
        </>
    );
}

export default CreatePost;
