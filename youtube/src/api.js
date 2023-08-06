import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyAChW6rzzbVHOZXR5Ad2svo0xxRc4nA1-Y",
    },

})

export default request;