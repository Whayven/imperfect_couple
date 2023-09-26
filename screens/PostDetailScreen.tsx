import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, LogBox} from 'react-native';
import {Icon} from 'react-native-elements';
import Moment from 'moment';

import {post, basic} from '../styles/common';
import {API_URL, AVATAR_API} from "../constants";
import CreateComment from "../components/CreateComment";
import {CommentData} from "../domain/commentData";
import ListComments from "../components/ListComments";
import {postService} from "../services/postService";
import {useAuth} from "../contexts/Auth";
import {handleError} from "../utils";
import {PostData} from "../domain/postData";
import {useUser} from "../contexts/User";
import Message from "../components/Message";


const PostDetailScreen = ({route}) => {
    const postData: PostData = route.params.postData;
    const [postDetail, setPostDetail] = useState<PostData>(route.params.postData);
    const [comments, setComments] = React.useState<CommentData[]>([]);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const auth = useAuth();
    const user = useUser();
    const avatar = `${API_URL}${postDetail.posted_by.profile_picture}` || `${AVATAR_API}/${postDetail.posted_by.username}`;

    const likePost = async (post: PostData) => {
        // Like Post
        if (!post.liked_by) {
            post.liked_by = []
        }
        const currentUser = user.userData
        if (post.liked_by.find((user) => user.id === currentUser?.id)) {
            post.liked_by = post.liked_by.filter((user) => user.id !== currentUser?.id)
            await postService.likePost(post, auth.authData?.token).then((response) => {
                console.log(`Unlike Post Response: ${JSON.stringify(response)}`)
                setPostDetail(response)
            }).catch((error) => {
                console.log(`Unlike Post Error: ${JSON.stringify(error)}`)
                handleError(error)
            })
            return
        }
        post.liked_by.push(user.userData)
        await postService.likePost(post, auth.authData?.token).then((response) => {
            console.log(`Like Post Response: ${JSON.stringify(response)}`)
            setPostDetail(response)
        }).catch((error) => {
            console.log(`Like Post Error: ${JSON.stringify(error)}`)
            handleError(error)
        })
    }

    const deletePost = (id: number) => {
        // Delete Post
        console.log(`Deleting post with id: ${id}`);
    }

    const deleteComment = async (id: number) => {
        // Delete Comment
        await postService.deleteComment(id, auth.authData?.token).then((response) => {
            console.log(`Delete Comment Response: ${JSON.stringify(response)}`)
            setComments(comments.filter((comment) => comment.id !== id));
            setMessage('Comment Deleted Successfully!');
            setDisplayMessage(true);
        }).catch((error) => {
            handleError(error);
            setMessage('An error has occurred.');
            setDisplayMessage(true);
        })
    }

    const likeComment = async (comment: CommentData) => {
        // Like Comment
        if (!comment.liked_by) {
            comment.liked_by = []
        }
        const currentUser = user.userData
        if (comment.liked_by.find((user) => user.id === currentUser?.id)) {
            comment.liked_by = comment.liked_by.filter((user) => user.id !== currentUser?.id)
            await postService.likeComment(comment, auth.authData?.token).then((response) => {
                console.log(`Unlike Post Response: ${JSON.stringify(response)}`)
                setComments(comments.map((commentData: CommentData) => {
                    console.log(`Comment Data: ${JSON.stringify(commentData)}`)
                    return commentData.id === comment.id ? response : commentData
                }))
            }).catch((error) => {
                console.log(`Unlike Post Error: ${JSON.stringify(error)}`)
                handleError(error)
            })
            return
        }
        comment.liked_by.push(user.userData)
        postService.likeComment(comment, auth.authData?.token).then((response) => {
            console.log(`Like Comment Response: ${JSON.stringify(response)}`)
            setComments(comments.map((comment) => comment.id === response.id ? response : comment))
        }).catch((error) => {
            handleError(error)
        });
    }

    const createComment = async (commentData: CommentData) => {
        // Create Comment
        console.log(`Creating comment: ${JSON.stringify(commentData)}`)
        await postService.createComment(commentData, auth.authData?.token).then((response) => {
            setComments([response, ...comments]);
            setMessage('Comment Posted!');
            setDisplayMessage(true);
        }).catch((error) => {
            handleError(error)
            setMessage('An error has occurred.');
            setDisplayMessage(true);
        })
    }

    useEffect(() => {
        // Get Post Comments
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        setLoading(true)
        setPostDetail(postData)
        postService.getComments(postData, auth.authData?.token).then((response) => {
            // console.log(`Get Comments Response: ${JSON.stringify(response)}`)
            setComments(response)
            setLoading(false)
        }).catch((error) => {
            handleError(error)
        })
    }, [postData]);

    return (
        <View style={{display: 'flex', backgroundColor: '#1a1a1a', alignItems: 'center'}}>
            {
                loading ? <View style={basic.loadingContainer}><Text style={basic.text}>Loading...</Text></View> :
                    <ScrollView automaticallyAdjustKeyboardInsets={true} style={post.scrollContainer}>
                        {
                            displayMessage &&
                            <Message message={message} displayMessage={displayMessage}
                                     setDisplayMessage={setDisplayMessage}/>
                        }
                        <View style={basic.container}>
                            <View style={post.postHeader}>
                                <Image
                                    style={post.postImage}
                                    source={{uri: avatar}}
                                />
                                <View style={post.postHeaderContent}>
                                    <Text style={post.postHeaderUsername}>{postDetail.posted_by.username}</Text>
                                    <Text
                                        style={post.postHeaderDate}>{Moment(postDetail.created_at).format('MM/DD/YY')} &#8729; {Moment(postDetail.created_at).format('hh:mm a')} </Text>
                                </View>
                            </View>
                            <View style={post.postContent}>
                                <Text
                                    style={post.postText}>{postDetail.content}</Text>

                            </View>
                            <View style={post.postActions}>
                                {
                                    user.userData?.id === postDetail.posted_by.id &&
                                    <Icon type={'font-awesome'} name={'trash'} color={'grey'} style={post.icon}
                                          onPress={() => {
                                              deletePost(postDetail.id)
                                          }}/>
                                }
                                <TouchableOpacity onPress={() => {
                                    likePost(postDetail)
                                }}>
                                    {
                                        postDetail.liked_by && postDetail.liked_by.find((user) => user.id === user.id) ?
                                            <Icon type={'font-awesome'} name={'heart'} color={'gold'}
                                                  style={post.icon}/> :
                                            <Icon type={'font-awesome'} name={'heart'} color={'grey'}
                                                  style={post.icon}/>
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={basic.horizontalRule}/>
                            <CreateComment createComment={createComment} postData={postDetail}/>
                            <View style={basic.horizontalRule}/>
                        </View>
                        {
                            comments.length > 0 ?
                                <ListComments comments={comments} deleteComment={deleteComment}
                                              likeComment={likeComment}/> :
                                <View style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}><Text style={post.postText}>No Comments</Text></View>
                        }
                    </ScrollView>
            }
        </View>
    )
}

export default PostDetailScreen;
