import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import sponsorship_package from '../img/sponsorship_package.pdf';

export const Sponsors = () => (
  <Container fluid>
    <section>
      <h1>Our Sponsors</h1>
      <Row>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Text>
              <h5>McGill University Department of Bioengineering</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Text>
              <h5>The Book Project MTL</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Text>
              <h5>Gutenberg Certs</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Text>
              <h5>McGill University Faculty of Medicine</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Text>
              <h5>McGill University Faculty of Engineering</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Text>
              <h5>Engineering Undergraduate Society</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Text>
              <h5>Student Society of McGill Unviersity</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
    <hr></hr>
    <section>
      <h1>Sponsor Us!</h1>
      <p>
        Interested in supporting the educational and professional development of
        highly motivated students? Passionate about biotechnology and its
        applications in healthcare and environmental conservation? Check out our
        sponsorship package for more information about sponsoring McGill
        BioDesign!
      </p>
      <iframe src={sponsorship_package} width='100%' height='400px'/>
    </section>
  </Container>
);
