import strapi from '../strapi';
import {User} from "../domain/user";

const getUser = async (token: string): Promise<User> => {
    return await strapi.get('/users/me', {headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
            const data = response.data;
            console.log(`getUser: ${JSON.stringify(data)}`)
            return {
                id: data.id,
                username: data.username,
                email: data.email,
                name: data.name,
                phone: data.phone,
                city: data.city,
                state: data.state,
                status: data.status,
            };
        })
        .catch((error) => {
            throw error;
        });
}

const updateUser = async (id: number, formData: User, token:string): Promise<User> => {
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
            }
        })
        .catch((error) => {
            throw error;
        });
}

export const userService = {
    getUser, updateUser
}
