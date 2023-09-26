import React, { useState } from 'react';
import {TextInput, View} from "react-native";
import { Button, Icon } from 'react-native-elements';
import {basic, form, post} from "../styles/common";
import {CommentData} from "../domain/commentData";
import {PostData} from "../domain/postData";

import {useUser} from "../contexts/User";

const CreateComment = ({ createComment, postData } : {
    createComment: (content: CommentData) => void,
    postData: PostData
}) => {
    const [content, setContent] = useState('');
    const user = useUser();

    const handleSubmit = () => {
        const commentData:CommentData = {
            id: undefined,
            content,
            post: postData,
            posted_by: user.userData,
        }
        createComment(commentData);
        setContent('');
    }
    return (
        <View style={form.commentContainer}>
            <TextInput
                style={form.commentText}
                placeholder="Share your thoughts..."
                placeholderTextColor={'#FFD700'}
                multiline={true}
                value={content}
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
                buttonStyle={post.commentButton}
                titleStyle={basic.buttonText}
            />
        </View>
    );
}

export default CreateComment;
