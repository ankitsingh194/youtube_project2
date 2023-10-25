import axios from 'axios';

const API = "AIzaSyDbcVA6BvbaMK4UllEiQt9jWkQihTgZH1o"


export default axios.create({
        baseURL: `https://www.googleapis.com/youtube/v3`,
        params:{
            key: API,
            part:'statistics',
        
        }
});