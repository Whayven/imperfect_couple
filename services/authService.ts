import axios from 'axios';

const API_URL = "https://f884-99-76-171-10.ngrok.io/api";

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
    return await axios.post(API_URL + '/auth/local', {identifier: email, password: _password})
        .then((response) => {
            const data = response.data;
            return {token: data.jwt, email: data.user.email, name: data.user.username};
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
    console.log(API_URL)
    return await axios.post(API_URL + '/auth/local/register', formData)
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

