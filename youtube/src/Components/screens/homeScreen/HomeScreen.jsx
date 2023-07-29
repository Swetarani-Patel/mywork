import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import CategoriesBar from '../../categoriesBar/CategoriesBar'
import Video from '../../video/Video'
// import { Container,Row,Col} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar/>
      <Row>
        {
            [...new Array(20)].map(()=>{
            return(
                <Col lg={4} md={3}>
                    <Video />
                </Col>
            )

            })
        }
      </Row>
    </Container>
  )
}

export default HomeScreen