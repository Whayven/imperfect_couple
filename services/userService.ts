import strapi from '../strapi';
import {UserData} from "../domain/userData";

const getUser = async (token: string): Promise<UserData> => {
    return await strapi.get('/users/me?populate=*', {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            const data = response.data;
            // console.log(`getUser: ${JSON.stringify(data)}`)
            return {
                id: data.id,
                username: data.username,
                email: data.email,
                name: data.name,
                phone: data.phone,
                city: data.city,
                state: data.state,
                status: data.status,
                profile_picture: data.profile_picture.formats.small.url
            };
        })
        .catch((error) => {
            throw error;
        });
}

const updateUser = async (id: number, formData: UserData, token:string): Promise<UserData> => {
    return await strapi.put(`/users/${id}`, formData, {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            const data = response.data;
            return {
                id: data.id,
                username: data.username,
                email: data.email,
                name: data.name,
                phone: data.phone,
                city: data.city,
                state: data.state,
                status: data.status,
                profile_picture: null
            }
        })
        .catch((error) => {
            throw error;
        });
}

export const userService = {
    getUser, updateUser
}
