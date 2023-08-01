import axios from 'axios'
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
     key:"AIzaSyA6qXc22i7XxDmRad4vT6mcPRakOjpsyLM",
    },
})
export default request