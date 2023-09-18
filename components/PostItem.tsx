import React from 'react';
import {View, Text, Image} from 'react-native';
import Moment from 'moment';

import {post} from '../styles/common';

import {PostData} from "../domain/postData";
import {AVATAR_API, API_URL} from "../constants";

const PostItem = ({postData}: {postData: PostData}) => {
    // console.log(`Post Item: ${JSON.stringify(postData.posted_by.data.attributes)}`)
    const avatar = `${API_URL}${postData.posted_by.profile_picture}` || `${AVATAR_API}/${postData.posted_by.username}`;
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
        </View>
    );
}

export default PostItem;
