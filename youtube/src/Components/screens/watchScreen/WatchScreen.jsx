import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../videoMetaData/VideoMetaData";
import VideoHorizontal from "../../videoHorizontal/VideoHorizontal";
import Comments from "../../comments/Comments";
import "./watchScreen.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../../Redux/actions/video.action";

function WatchScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);
  const { video, loading } = useSelector((state) => state.selectedVideo);
  

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title={video?.snippet?.title}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {
          !loading?  <VideoMetaData video={video} videoId={id}/> : <h6>Loading.....</h6>
        }
       
        <Comments videoId={id}/>
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
}

export default WatchScreen;
