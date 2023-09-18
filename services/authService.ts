import strapi from '../strapi'

export type AuthData = {
    token: string;
    email: string;
    name: string;
};

export type RegisterData = {
    username: string;
    email: string;
    password: string;
    name: string;
    city: string;
    state: string;
    status: string;
};

const signIn = async (email: string, _password: string): Promise<AuthData> => {
    // this is a mock API call, but in a real app
    // this will need to connect with some real API,
    // send email and password, and if credentials are correct
    //then the API will resolve with some token and other data as below
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({
    //             token: JWTTokenMock,
    //             email: email,
    //             name: 'Lucas Garcez',
    //         });
    //     }, 1000);
    // });
    return await strapi.post('/auth/local', {identifier: email, password: _password})
        .then((response) => {
            const data = response.data;
            return {token: data.jwt, email: data.user.email, name: data.user.username};
        }).catch((error) => {
            throw error;
        });

};

const signUp = async (formData: RegisterData): Promise<AuthData> => {
    // this is a mock API call, but in a real app
    // this will need to connect with some real API,
    // send email and password, and if credentials are correct
    //then the API will resolve with some token and other data as below
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({
    //             token: JWTTokenMock,
    //             email: email,
    //             name: 'Lucas Garcez',
    //         });
    //     }, 1000);
    // });
    return await strapi.post('/auth/local/register', formData)
        .then((response) => {
            const data = response.data;
            return {token: data.jwt, email: data.user.email, name: data.user.username};
        })
        .catch((error) => {
            throw error;
        });

}

export const authService = {
    signIn, signUp
};

