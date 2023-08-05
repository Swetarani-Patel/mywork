import React, { useEffect } from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfVideoById } from "../../Redux/actions/comments.action";

function Comments({videoId}) {
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getCommentsOfVideoById(videoId))
  },[videoId, dispatch])

  const comments = useSelector(state=>state.commentsList.comments)
  const _comments = comments?.map
  const handleComments = () => {};
  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="comments__form d-flex 1-100 my-2">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt=""
          className="rounded-circle mr-3"
        /> &nbsp;&nbsp;&nbsp;&nbsp;
        <form onSubmit={handleComments} className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-grow-1"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
}

export default Comments;
