import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyBXBzgfRz6Vr-kxjf53xCwbZWDYhhWhiNg",
    },

})

export default request;