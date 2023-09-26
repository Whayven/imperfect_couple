import React from 'react';
import {FlatList} from 'react-native';
import PostItem from "./PostItem";

const ListPosts = ({posts, deletePost, likePost, navigateToPost}) => {
    return (
        <>
            <FlatList
                data={posts}
                renderItem={({item}) => <PostItem postData={item} deletePost={deletePost} likePost={likePost} navigateToPost={navigateToPost} />}
                keyExtractor={item => item.id.toString()}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: 10,
                    marginHorizontal: 25
                }}
            />
        </>
    );
}

export default ListPosts;
