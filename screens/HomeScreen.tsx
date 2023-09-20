import React, {useEffect} from 'react';
import {View} from 'react-native';
import CreatePost from "../components/CreatePost";
import ListPosts from "../components/ListPosts";
import {basic} from '../styles/common';
import {PostData} from "../domain/postData";
import {useAuth} from "../contexts/Auth";
import {postService} from "../services/postService";
import {handleError} from "../utils";
import {useUser} from "../contexts/User";

// This is your Home Screen
// @ts-ignore
const HomeScreen = () => {
    const [posts, setPosts] = React.useState<PostData[]>([])

    const auth = useAuth();
    const user = useUser();

    const createPost = async (content: string) => {
        const post : PostData = {
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
                setPosts([response, ...posts])
            }
        ).catch((error) => {
            handleError(error)
        })
    }

    const deletePost = async (id: number) => {
        await postService.deletePost(id, auth.authData?.token).then((response) => {
            // console.log(`Delete Post Response: ${JSON.stringify(response)}`)
            setPosts(posts.filter((post) => post.id !== id))
        }).catch((error) => {
            console.log(`Delete Post Error: ${JSON.stringify(error)}`)
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
                setPosts(posts.map((post) => post.id === id ? response : post))
            }).catch((error) => {
                console.log(`Unlike Post Error: ${JSON.stringify(error)}`)
                handleError(error)
            })
            return
        }
        post.liked_by.push(user.userData)
        await postService.likePost(post, auth.authData?.token).then((response) => {
            // console.log(`Like Post Response: ${JSON.stringify(response)}`)
            setPosts(posts.map((post) => post.id === id ? response : post))
        }).catch((error) => {
            // console.log(`Like Post Error: ${JSON.stringify(error)}`)
            handleError(error)
        })
    }

    useEffect(() => {
        postService.getPosts(auth.authData?.token).then((response) => {
            // console.log(`Get Posts Response: ${JSON.stringify(response)}`)
            setPosts(response)
        }).catch((error) => {
            handleError(error)
        })
    }, [])

  return (
    <View style={basic.container}>
        <CreatePost createPost={createPost} />
        <View style={{height: 20}}></View>
        <ListPosts posts={posts} deletePost={deletePost} likePost={likePost} />
    </View>
  );
};

export default HomeScreen;
