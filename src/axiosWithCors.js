import axios from 'axios';

export const axiosWithCors = () => {
    
    return axios.create({
        headers: {
            Access-Control-Allow-Origin:*
        }
    });
};