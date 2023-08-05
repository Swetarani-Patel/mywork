import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../../categorybar/Categories";
import Video from "../../video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosCategory,
} from "../../../Redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";


const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  console.log(videos);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosCategory(activeCategory));
    }
  };

  return (
    <Container>
      <Categories />
      <Row>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          Loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
          className="row"
        >
          {!loading
            ? videos.map((video) => (
                <Col lg={4} md={3} key={video.id}>
                  <Video video={video} />
                </Col>
              ))
            : 
              (<h2>Loading</h2>)}
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default HomeScreen;
