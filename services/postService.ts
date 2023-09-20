import strapi from '../strapi';
import {PostData} from "../domain/postData";
import {User} from "../models/User";


const getPosts = async (token: string): Promise<PostData[]> => {
    return await strapi.get('/posts?populate[posted_by][populate][0]=profile_picture&populate[liked_by][populate]=true', {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            const data = response.data.data;
            // console.log(`getPosts: ${JSON.stringify(data)}`)
            return data.map((post: any) => {
                const postedBy = new User({
                    id: post.attributes.posted_by.data.id,
                    username: post.attributes.posted_by.data.attributes.username,
                    profile_picture: post.attributes.posted_by?.data?.attributes.profile_picture?.data?.attributes?.formats?.small?.url,
                })
                let likedBy = null;
                if (post.attributes.liked_by) {
                    likedBy = post.attributes.liked_by.data.map((user: any) => {
                        return new User({
                            id: user.id,
                            username: user.attributes.username,
                        })
                    })
                }
                return {
                    id: post.id,
                    posted_by: postedBy,
                    content: post.attributes.content,
                    created_at: post.attributes.createdAt,
                    liked_by: likedBy
                };
            });
        })
        .catch((error) => {
            throw error;
        });
}

const createPost = async (formData: PostData, token: string): Promise<PostData> => {
    const data = {
        ...formData
    }
    // console.log(`createPost data: ${JSON.stringify(data)}`)
    return await strapi.post('/posts?populate[posted_by][populate][0]=profile_picture', {data}, {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            // console.log(`createPost response: ${JSON.stringify(response.data)}`)
            const data = response.data.data;
            const postedBy = new User({
                id: data.attributes.posted_by.data.id,
                username: data.attributes.posted_by.data.attributes.username,
                profile_picture: data.attributes.posted_by?.data?.attributes.profile_picture?.data?.attributes?.formats?.small?.url,
            })
            return {
                id: data.id,
                posted_by: postedBy,
                content: data.attributes.content,
                created_at: data.attributes.createdAt,
                liked_by: null
            }
        })
        .catch((error) => {
            throw error;
        });
}

const deletePost = async (id: number, token: string): Promise<void> => {
    return await strapi.delete(`/posts/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            console.log(`deletePost response: ${JSON.stringify(response.data)}`)
        })
        .catch((error) => {
            throw error;
        });
}

const likePost = async (post: PostData, token: string): Promise<PostData> => {
    const data = {
        ...post
    }
    return await strapi.put(`/posts/${post.id}?populate[0]=liked_by`, {data}, {headers: {Authorization: `Bearer ${token}`}}).then(
        (response) => {
            // console.log(`likePost response: ${JSON.stringify(response.data)}`)
            const data = response.data.data;
            let likedBy = null;
            if (data.attributes.liked_by) {
                likedBy = data.attributes.liked_by.data.map((user: any) => {
                    return new User({
                        id: user.id,
                        username: user.attributes.username,
                    })
                })
            }
            return {
                id: data.id,
                posted_by: post.posted_by,
                content: data.attributes.content,
                created_at: data.attributes.createdAt,
                liked_by: likedBy
            }
        })
        .catch((error) => {
            throw error;
        });
}


export const postService = {
    getPosts, createPost, deletePost, likePost
}
