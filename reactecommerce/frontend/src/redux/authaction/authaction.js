
import firebase from 'firebase/compat/app';
import auth from "../../firebasee.js";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOG_OUT } from '../actionType';
 

export const login=()=>  async (dispatch) => { 
    try {

        dispatch({
            type:LOGIN_REQUEST
        })

      const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
      let res = await auth.signInWithPopup(provider); 
    
      console.log(res);
      const accessToken = res.credential.accessToken;
      
      const profile= {
        name:res.additionalUserInfo.profile.name,
        photoURL:res.additionalUserInfo.profile.picture,
      }
      console.log(profile);
       localStorage.setItem("access-token", accessToken);
       localStorage.setItem("user-profile", JSON.stringify(profile));
      dispatch({
        type:LOGIN_SUCCESS,
        payload:accessToken,
      })
      dispatch({
        type:LOAD_PROFILE,
        payload:profile,
      })
    } catch (error) {

      console.error(error.message);
      dispatch({
        type:LOGIN_FAIL,
        payload:error.message
      })

    }
  };


  export const logout=()=> async (dispatch)=>{
 
     
    dispatch({
      type:LOG_OUT,

    })


     localStorage.removeItem("access-token")
     localStorage.removeItem("user-profile")
  }
