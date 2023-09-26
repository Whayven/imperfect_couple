import React from 'react';
import {View, Text, Image} from 'react-native';
import Moment from 'moment';
import {Icon} from 'react-native-elements';

import {post} from '../styles/common';

import {AVATAR_API, API_URL} from "../constants";

import {useUser} from "../contexts/User";

const CommentItem = ({commentData, deleteComment, likeComment}) => {
    const user = useUser();
    const avatar = `${API_URL}${commentData.posted_by.profile_picture}` || `${AVATAR_API}/${commentData.posted_by.username}`;

    return (
        <View style={post.commentContainer}>
            <View style={post.postHeader}>
                <Image
                    style={post.postImage}
                    source={{uri: avatar}}
                />
                <View style={post.postHeaderContent}>
                    <Text style={post.postHeaderUsername}>{commentData.posted_by.username}</Text>
                    <Text
                        style={post.postHeaderDate}>{Moment(commentData.created_at).format('MM/DD/YY')} &#8729; {Moment(commentData.created_at).format('hh:mm a')} </Text>
                </View>
            </View>
                <View style={post.postContent}>
                    <Text
                        style={post.postText}>{commentData.content}</Text>
                </View>
                <View style={post.postActions}>
                    {
                        user.userData?.id === commentData.posted_by.id &&
                        <Icon type={'font-awesome'} name={'trash'} color={'grey'} style={post.icon} onPress={() => {
                            deleteComment(commentData.id)
                        }}/>
                    }
                    {
                        commentData.liked_by && commentData.liked_by.find((user) => user.id === user.id) ?
                            <Icon type={'font-awesome'} name={'heart'} color={'gold'} style={post.icon} onPress={() => {
                                console.log(`Comment Data: ${JSON.stringify(commentData)}`)
                                likeComment(commentData)
                            }}/> :
                            <Icon type={'font-awesome'} name={'heart'} color={'grey'} style={post.icon} onPress={() => {
                                console.log(`Comment Data: ${JSON.stringify(commentData)}`)
                                likeComment(commentData)
                            }}/>
                    }
                </View>
            </View>
    );
}

export default CommentItem;
