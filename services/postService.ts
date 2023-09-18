import strapi from '../strapi';
import { Post } from "../domain/post";

const getPosts = async (token: string): Promise<Post[]> => {
    return await strapi.get('/posts', {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            const data = response.data;
            console.log(`getPosts: ${JSON.stringify(data)}`)
            return data.map((post: any) => {
                return {
                    id: post.id,
                    posted_by: post.posted_by,
                    content: post.content,
                    created_at: post.created_at,
                };
            });
        })
        .catch((error) => {
            throw error;
        });
}

const createPost = async (formData: Post, token:string): Promise<Post> => {
    const data = {
        data: formData
    }
    return await strapi.post('/posts', {data}, {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            // console.log(`createPost response: ${JSON.stringify(response)}`)
            const data = response.data.data;
            return {
                id: data.id,
                posted_by: formData.posted_by,
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
