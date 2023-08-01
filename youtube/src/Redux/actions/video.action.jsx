import request from "../../api"
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../ActionType"

export const getPopularVideos = ()=> async dispatch =>{
    try{
     dispatch({
        type: HOME_VIDEOS_REQUEST,
     })
     const {data} = await request('/videos',{
        params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 20,
            pageToken: '',
        },
     })
     dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
            videos:data.items,
            nextPageToken: data.nextPageToken, 
            category:'All',
        },
     })
    //  console.log(res);
    }catch(error){
  console.log(error.message);
  dispatch({
    type: HOME_VIDEOS_FAIL,
    payload:error.meassage
  })
    }
}
 


export const getVideosByCategories = (keyword)=> async (dispatch, getState) =>{
  try{
   dispatch({
      type: HOME_VIDEOS_REQUEST,
   })
   const {data} = await request('/search',{
      params: {
          part: 'snippet',
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
          q:keyword,
          type:'video'

      },
   })
   dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
          videos:data.items,
          nextPageToken: data.nextPageToken, 
          category:keyword
      },
   })
  //  console.log(res);
  }catch(error){
    console.log("Error fetching videos:", error.message);
dispatch({
  type: HOME_VIDEOS_FAIL,
  payload:error.meassage
})
  }
}