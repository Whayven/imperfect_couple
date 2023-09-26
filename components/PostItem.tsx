import React from 'react';
import {View, Text, Image} from 'react-native';
import Moment from 'moment';
import {Icon} from 'react-native-elements';

import {post} from '../styles/common';

import {PostData} from "../domain/postData";
import {AVATAR_API, API_URL} from "../constants";

import {useUser} from "../contexts/User";

const PostItem = ({postData, deletePost, likePost, navigateToPost}: {
    postData: PostData,
    deletePost: (id: number) => void,
    likePost: (id: number) => void,
    navigateToPost: (post: PostData) => void
}) => {
    const user = useUser();
    const avatar = `${API_URL}${postData.posted_by.profile_picture}` || `${AVATAR_API}/${postData.posted_by.username}`;

    const handleDelete = (id: number) => {
        deletePost(id);
    }

    const handleLike = (id: number) => {
        likePost(id);
    }

    const handleNavigate = (post: PostData) => {
        navigateToPost(post);
    }

    return (
        <View style={post.postContainer}>
            <View style={post.postHeader}>
                <Image
                    style={post.postImage}
                    source={{uri: avatar}}
                />
                <View style={post.postHeaderContent}>
                    <Text style={post.postHeaderUsername}>{postData.posted_by.username}</Text>
                    <Text
                        style={post.postHeaderDate}>{Moment(postData.created_at).format('MM/DD/YY')} &#8729; {Moment(postData.created_at).format('hh:mm a')} </Text>
                </View>
            </View>

            <View style={post.postContent}>
                <Text
                    style={post.postText}>{postData.content.length > 250 ? `${postData.content.substring(0, 249)}...` : postData.content}</Text>
            </View>
            <View style={post.postActions}>
                {
                    user.userData?.id === postData.posted_by.id &&
                    <Icon type={'font-awesome'} name={'trash'} color={'grey'} style={post.icon} onPress={() => {
                        handleDelete(postData.id)
                    }}/>
                }
                {
                    postData.liked_by && postData.liked_by.find((user) => user.id === user.id) ?
                        <Icon type={'font-awesome'} name={'heart'} color={'gold'} style={post.icon} onPress={() => {
                            handleLike(postData.id)
                        }}/> :
                        <Icon type={'font-awesome'} name={'heart'} color={'grey'} style={post.icon} onPress={() => {
                            handleLike(postData.id)
                        }}/>
                }
                <Icon type={'font-awesome'} name={'comment'} color={'grey'} style={post.icon} onPress={() => {
                    handleNavigate(postData)
                }}/>
            </View>
        </View>
    );
}

export default PostItem;
