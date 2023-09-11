import axios from 'axios';

const apikey = '493f2a4473e532330dce6fd4a86b6b72';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: { api_key: apikey }
});