import axios from 'axios';

const API = process.env.REACT_APP_KEY_YOU
//const Part = "snippet"

export default axios.create({
        baseURL: `https://www.googleapis.com/youtube/v3`,
        params:{
            key: API,
        
        }
});
