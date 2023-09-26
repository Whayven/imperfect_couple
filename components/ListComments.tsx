import React from 'react';
import {FlatList} from 'react-native';
import CommentItem from "./CommentItem";

const ListPosts = ({comments, deleteComment, likeComment}) => {
    return (
        <>
            <FlatList
                data={comments}
                renderItem={({item}) => <CommentItem commentData={item} deleteComment={deleteComment} likeComment={likeComment} />}
                keyExtractor={(item, index) => index.toString()}
                style={{
                    width: '100%'
                }}
                contentContainerStyle={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                }}
            />
        </>
    );
}

export default ListPosts;
