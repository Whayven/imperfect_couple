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

    useEffect(() => {
        postService.getPosts(auth.authData?.token).then((response) => {
            setPosts(response)
        }).catch((error) => {
            handleError(error)
        })
    }, [])

  return (
    <View style={basic.container}>
        <CreatePost createPost={createPost} />
        <View style={{height: 20}}></View>
        <ListPosts posts={posts} />
    </View>
  );
};

export default HomeScreen;
