import strapi from '../strapi';
import { PostData } from "../domain/postData";
import { User } from "../models/User";



const getPosts = async (token: string): Promise<PostData[]> => {
    return await strapi.get('/posts?populate[posted_by][populate][0]=profile_picture', {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            const data = response.data.data;
            // console.log(`getPosts: ${JSON.stringify(data)}`)
            return data.map((post: any) => {
                const postedBy = new User({
                    id: post.attributes.posted_by.data.id,
                    username: post.attributes.posted_by.data.attributes.username,
                    profile_picture: post.attributes.posted_by?.data?.attributes.profile_picture?.data?.attributes?.formats?.small?.url,
                })
                return {
                    id: post.id,
                    posted_by: postedBy,
                    content: post.attributes.content,
                    created_at: post.attributes.createdAt,
                };
            });
        })
        .catch((error) => {
            throw error;
        });
}

const createPost = async (formData: PostData, token:string): Promise<PostData> => {
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
            }
        })
        .catch((error) => {
            throw error;
        });
}


export const postService = {
    getPosts, createPost
}
