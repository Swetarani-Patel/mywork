import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Categories from '../../categorybar/Categories'
import Video from '../../video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../../Redux/actions/video.action'

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const { videos } = useSelector(state => state.homeVideos)

  return (
    <Container>
      <Categories />
      <Row>
        {
          videos.map((video) => {
            return (
              <Col lg={3} md={3}>
                <Video video={video} key={video.id} />
              </Col>
            )

          })
        }
      </Row>
    </Container>
  )
}

export default HomeScreen
