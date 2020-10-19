import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import sponsorship_package from '../img/sponsorship_package.pdf';
import bioengineering from '../img/sponsors/bioengineering.png';
import bookproject from '../img/sponsors/bookproject.png';
import gutenberg from '../img/sponsors/gutenberg.png';
import medicine from '../img/sponsors/medicine.png';
import engineering from '../img/sponsors/engineering.png';
import eus from '../img/sponsors/eus.png';
import ssmu from '../img/sponsors/ssmu.png';

export const Sponsors = () => (
  <Container fluid>
    <section>
      <h1>Our Sponsors</h1>
      <Row>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Img src={bioengineering} variant="top" alt="McGill University Department of Bioengineering"/>
            <Card.Body>
              <Card.Text>
              <h5><a href="https://www.mcgill.ca/bioengineering/">McGill University Department of Bioengineering</a></h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Img src={bookproject} variant="top" alt="The MTL Book Project"/>
            <Card.Body>
              <Card.Text className="down">
              <h5><a href="https://www.facebook.com/themtlbookproject/">The MTL Book Project</a></h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Img src={gutenberg} variant="top" alt="Gutenberg Certs"/>
            <Card.Body>
              <Card.Text>
              <h5><a href="https://www.gutenbergcerts.com/">Gutenberg Certs</a></h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Img src={medicine} variant="top" alt="McGill University Faculty of Medicine"/>
            <Card.Body>
              <Card.Text>
              <h5><a href="https://www.mcgill.ca/medicine/">McGill University Faculty of Medicine</a></h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Img src={engineering} variant="top" alt="McGill University Faculty of Engineering"/>
            <Card.Body>
              <Card.Text>
              <h5><a href="https://www.mcgill.ca/engineering/">McGill University Faculty of Engineering</a></h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Img src={eus} variant="top" alt="EUS"/>
            <Card.Body>
              <Card.Text>
              <h5><a href="https://mcgilleus.ca/">Engineering Undergraduate Society</a></h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="column">
          <Card className="tile">
            <Card.Img src={ssmu} variant="top" alt="SSMU"/>
            <Card.Body>
              <Card.Text>
              <h5><a href="https://ssmu.ca/">Student Society of McGill Unviersity</a></h5>
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
