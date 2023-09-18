import strapi from '../strapi';
import { Post } from "../domain/post";

const getPosts = async (token: string): Promise<Post[]> => {
    return await strapi.get('/posts?populate[posted_by][populate][0]=profile_picture', {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            const data = response.data.data;
            console.log(`getPosts: ${JSON.stringify(data)}`)
            return data.map((post: any) => {
                return {
                    id: post.id,
                    posted_by: post.attributes.posted_by,
                    content: post.attributes.content,
                    created_at: post.attributes.created_at,
                };
            });
        })
        .catch((error) => {
            throw error;
        });
}

const createPost = async (formData: Post, token:string): Promise<Post> => {
    const data = {
        ...formData
    }
    console.log(`createPost data: ${JSON.stringify(data)}`)
    return await strapi.post('/posts?populate[posted_by][populate][0]=profile_picture', {data}, {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            console.log(`createPost response: ${JSON.stringify(response.data)}`)
            const data = response.data.data;
            return {
                id: data.id,
                posted_by: data.attributes.posted_by,
                content: data.attributes.content,
                created_at: data.attributes.created_at,
            }
        })
        .catch((error) => {
            throw error;
        });
}


export const postService = {
    getPosts, createPost
}
