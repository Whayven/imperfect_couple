import React, {useState} from 'react';
import {TextInput, View} from "react-native";

import {basic, form, post} from "../styles/common";
import {Button, Icon} from "react-native-elements";

const CreatePost = ({createPost}) => {
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        createPost(content);
        setContent('');
    }

    return (
        <View style={form.postContainer}>
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
                buttonStyle={post.postButton}
                titleStyle={basic.buttonText}
            />
        </View>
    );
}

export default CreatePost;
