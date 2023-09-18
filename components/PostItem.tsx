import React from 'react';
import {View, Text, Image} from 'react-native';
import Moment from 'moment';

import {post} from '../styles/common';

import {Post} from "../domain/post";
import {AVATAR_API, API_URL} from "../constants";

const PostItem = ({postData}) => {
    // console.log(`Post Item: ${JSON.stringify(postData.posted_by.data.attributes)}`)
    const avatar = `${API_URL}${postData.posted_by.data.attributes?.profile_picture?.data?.attributes?.formats?.small?.url}` || `${AVATAR_API}/${postData.posted_by.data.attributes?.username}`;
    return (
        <View style={post.postContainer}>
            <Image
                style={post.postImage}
                source={{uri: avatar}}
            />
            <View style={post.postContent}>
                <Text style={post.postText}>{postData.content}</Text>
                <Text style={post.postDate}>{Moment(postData.createdAt).format('MMM Do YYYY, h:mma')}</Text>
            </View>
        </View>
    );
}

export default PostItem;
