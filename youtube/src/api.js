import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyCp5C1_IF9E9Tje4I5lVuV4OCDM-Tbrsjc",
    },

})

export default request;