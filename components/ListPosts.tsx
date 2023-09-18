import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {basic} from '../styles/common';

import {useAuth} from "../contexts/Auth";
import {handleError} from "../utils";
import {postService} from "../services/postService";
import {Post} from "../domain/post";
import PostItem from "./PostItem";

const ListPosts = ({posts}) => {


    return (
        <>
            <FlatList
                data={posts}
                renderItem={({item}) => <PostItem postData={item}/>}
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
