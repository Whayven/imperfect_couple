import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import CreatePost from "../components/CreatePost";
import ListPosts from "../components/ListPosts";
import {basic} from '../styles/common';
import {PostData} from "../domain/postData";
import {useAuth} from "../contexts/Auth";
import {postService} from "../services/postService";
import {handleError} from "../utils";
import {useUser} from "../contexts/User";
import Message from "../components/Message";
import {useFocusEffect} from "@react-navigation/native";

import {sortArrayByDate} from "../utils";


// This is your Home Screen
// @ts-ignore
const HomeScreen = ({navigation}) => {
    const [posts, setPosts] = React.useState<PostData[]>([]);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [message, setMessage] = useState('');

    const auth = useAuth();
    const user = useUser();

    const createPost = async (content: string) => {
        const post: PostData = {
            id: undefined,
            content,
            posted_by: user.userData,
            created_at: null,
            liked_by: []
        }
        // console.log(`Creating post: ${JSON.stringify(post)}`)
        // Send formData to the server here
        await postService.createPost(post, auth.authData?.token).then((response) => {
                // console.log(`Create Post Response: ${JSON.stringify(response)}`)
                setPosts(sortArrayByDate([response, ...posts]))
                setMessage('Post Created Successfully!')
                setDisplayMessage(true);
            }
        ).catch((error) => {
            handleError(error)
            setMessage('An error has occurred.')
            setDisplayMessage(true);
        })
    }

    const deletePost = async (id: number) => {
        await postService.deletePost(id, auth.authData?.token).then(() => {
            // console.log(`Delete Post Response: ${JSON.stringify(response)}`)
            setPosts(sortArrayByDate(posts.filter((post) => post.id !== id)))
        }).then(() => {
            setMessage('Post Deleted Successfully!')
            setDisplayMessage(true);
        }).catch((error) => {
            console.log(`Delete Post Error: ${JSON.stringify(error)}`)
            setMessage('An error has occurred.')
            setDisplayMessage(true);
        })
    }

    const likePost = async (id: number) => {
        const post = posts.find((post) => post.id === id);
        if (!post.liked_by) {
            post.liked_by = []
        }
        const currentUser = user.userData
        if (post.liked_by.find((user) => user.id === currentUser?.id)) {
            post.liked_by = post.liked_by.filter((user) => user.id !== currentUser?.id)
            await postService.likePost(post, auth.authData?.token).then((response) => {
                // console.log(`Unlike Post Response: ${JSON.stringify(response)}`)
                setPosts(sortArrayByDate(posts.map((post) => post.id === id ? response : post)))
            }).catch((error) => {
                console.log(`Unlike Post Error: ${JSON.stringify(error)}`)
                handleError(error)
            })
            return
        }
        post.liked_by.push(user.userData)
        await postService.likePost(post, auth.authData?.token).then((response) => {
            // console.log(`Like Post Response: ${JSON.stringify(response)}`)
            setPosts(sortArrayByDate(posts.map((post) => post.id === id ? response : post)))
        }).catch((error) => {
            // console.log(`Like Post Error: ${JSON.stringify(error)}`)
            handleError(error)
        })
    }

    const navigateToPost = (post: PostData) => {
        console.log(`Navigating to post: ${JSON.stringify(post)}`)
        navigation.navigate('PostDetail', {
            postData: post
        })
    }

    useFocusEffect(
        useCallback(() => {
            postService.getPosts(auth.authData?.token).then((response) => {
                // console.log(`Get Posts Response: ${JSON.stringify(response)}`)
                setPosts(sortArrayByDate(response))
            }).catch((error) => {
                handleError(error)
            })
        }, [user.userData])
    )

    return (
        <View style={basic.container}>
            {
                displayMessage &&
                <Message message={message} displayMessage={displayMessage} setDisplayMessage={setDisplayMessage}/>
            }
            <CreatePost createPost={createPost}/>
            <View style={{height: 10}}></View>
            {
                posts.length > 0 ? <ListPosts posts={posts} deletePost={deletePost} likePost={likePost} navigateToPost={navigateToPost}/> :
                    <View><Text style={basic.basicText}>No posts to display.</Text></View>
            }
        </View>
    );
};

export default HomeScreen;
