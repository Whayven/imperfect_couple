import React from 'react';
import {View, Text, Image} from 'react-native';
import Moment from 'moment';
import {Icon} from 'react-native-elements';

import {post} from '../styles/common';

import {PostData} from "../domain/postData";
import {AVATAR_API, API_URL} from "../constants";

import {useUser} from "../contexts/User";

const PostItem = ({postData, deletePost, likePost}: {
    postData: PostData,
    deletePost: (id: number) => void,
    likePost: (id: number) => void
}) => {
    const user = useUser();
    const avatar = `${API_URL}${postData.posted_by.profile_picture}` || `${AVATAR_API}/${postData.posted_by.username}`;

    const handleDelete = (id: number) => {
        deletePost(id);
    }

    const handleLike = (id: number) => {
        likePost(id);
    }

    return (
        <View style={post.postContainer}>
            <Image
                style={post.postImage}
                source={{uri: avatar}}
            />
            <View style={post.postContent}>
                <Text style={post.postText}>{postData.content}</Text>
                <Text style={post.postDate}>{Moment(postData.created_at).format('MMM Do YYYY, h:mma')}</Text>
            </View>
            <View style={post.postActions}>
                <View style={post.iconContainer}>
                    {
                        user.userData?.id === postData.posted_by.id ?
                            <Icon type={'font-awesome'} name={'trash'} color={'grey'} style={post.icon} onPress={() => {
                                handleDelete(postData.id)
                            }}/> :
                            <View style={post.icon}></View>
                    }
                </View>
                <View style={post.iconContainer}>
                    {
                        postData.liked_by && postData.liked_by.find((user) => user.id === user.id) ?
                            <Icon type={'font-awesome'} name={'heart'} color={'red'} style={post.icon} onPress={() => {
                                handleLike(postData.id)
                            }}/> :
                            <Icon type={'font-awesome'} name={'heart'} color={'grey'} style={post.icon} onPress={() => {
                                handleLike(postData.id)
                            }}/>
                    }
                </View>

            </View>
        </View>
    );
}

export default PostItem;
