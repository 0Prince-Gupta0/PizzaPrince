import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const about = () => {
  return (
    <Container style={{marginTop:'50px'}} text-center>
        <h1>Who we Are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad assumenda voluptates porro a ex enim magnam facere officia? Obcaecati adipisci, quibusdam laboriosam voluptatibus voluptatum quasi deleniti, consectetur id suscipit quam deserunt assumenda, enim reprehenderit eligendi beatae! Doloremque, quisquam. Sequi et, nesciunt ab at debitis vitae perferendis modi quidem, saepe nisi inventore? Expedita molestias, velit rerum facilis mollitia delectus a libero assumenda quam commodi neque ducimus quaerat enim ut magnam quae repellendus, corrupti dicta. Amet, voluptate, hic accusantium possimus velit repellendus et officia, aspernatur suscipit harum magni deserunt vitae? Quod et doloribus consequatur voluptatum autem amet quia nisi exercitationem! Animi, non possimus laboriosam consequatur rem magni vero. Amet esse consectetur, minima eum quae beatae quis aperiam impedit inventore earum eligendi quisquam, doloremque labore alias, atque debitis rerum quos asperiores! Voluptatum, officiis. In ut consequuntur et qui aliquid corrupti. Quis repudiandae esse earum quidem amet distinctio! Quod illo cum odio expedita, commodi ipsum vitae dolorum velit, molestiae deleniti, aliquid doloribus ab suscipit ducimus eius exercitationem numquam veniam nulla reiciendis quos vel mollitia! Natus in obcaecati assumenda quo? Earum sapiente expedita magnam placeat non perspiciatis maxime sunt officia deserunt temporibus aliquid, soluta reprehenderit quia consequuntur corrupti ut? Totam aliquid rerum sit iusto.</p>
        <h1>30 Minutes or FREE</h1>
        <Row>
            <Col md={6}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque deleniti aperiam, sunt illo nobis fugit ad? Repellat reiciendis eaque aperiam ab, nihil ut est dicta neque nam sapiente id impedit, officia laboriosam esse! Aliquam distinctio magnam velit commodi maiores corrupti unde ratione debitis necessitatibus quae, incidunt voluptatem eos sapiente culpa aut, excepturi adipisci possimus dolorum consequuntur qui praesentium facere quos. Atque architecto ipsa accusamus nam consectetur quisquam debitis minus optio. Dignissimos, facere repellat. Consectetur quasi expedita sapiente sed eligendi ipsam animi nobis porro, ad nulla cupiditate dolorum pariatur asperiores non soluta aut. Optio sunt ea dolor ex quaerat veritatis!</p></Col>
            <Col md={6}><img src='./images/30.webp' alt='notfound' style={{marginLeft:'150px'}}></img></Col>
        </Row>
        <Row>
            <h1>Our Chefs</h1>
            <Col md={4}>
            <Card>
        <Card.Img variant="top" src="./images/chef1.jpg" />
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur, maiores voluptatum perspiciatis ipsum placeat labore ea omnis qui a.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col md={4}>
            <Card>
        <Card.Img variant="top" src="./images/chef2.jpg" />
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur, maiores voluptatum perspiciatis ipsum placeat labore ea omnis qui a.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col md={4}>
            <Card>
        <Card.Img variant="top" src="./images/chef3.jpg" />
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur, maiores voluptatum perspiciatis ipsum placeat labore ea omnis qui a.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default about;
