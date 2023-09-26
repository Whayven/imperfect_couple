import { useRef, useEffect } from 'react';

export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};

export const handleError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(`Error Data: ${JSON.stringify(error.response.data)}`);
        console.log(`Error Status: ${error.response.status}`);
        console.log(`Error Headers: ${error.response.headers}`);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(`Error Request: ${error.request}`);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log(`Error Message: ${error.message}`);
    }
    console.log(error.config);
}

export const sortArrayByDate = (array:Array<any>) : Array<any> => {
    return array.sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    })
}
