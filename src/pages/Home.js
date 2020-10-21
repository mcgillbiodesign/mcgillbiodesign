import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slideshow from "../components/Slideshow";
import research from "../img/icons/research.png";
import workshops from "../img/icons/workshops.png";
import community from "../img/icons/community.png";

export const Home = () => (
  <React.Fragment>
    <Slideshow />
    <p></p>
    <Container fluid>
      <h1>MCGILL BIODESIGN</h1>
      <p>
        McGill BioDesign is an official Engineering Undergraduate Society design
        team whose goal is to address real world issues by finding solutions at
        the intersection of engineering, biology, and business. We work on
        biotechnology projects to present at competitions and give research
        experience to students, provide a community for like-minded students
        from a range of backgrounds, and offer networking and professional
        development opportunities through workshops and tutorials.
      </p>
      <hr></hr>
      <h2><b>About Us</b></h2>
    </Container>
    <Container fluid>
      <Row>
        <Col xs={12} md={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h3><img src={research} width='25px'/> Research Opportunities</h3>
              </Card.Title>
              <Card.Text>
                Design projects in areas such as <b>wound healing, public health,</b> and
                <b> environmental health</b>. Project subteams provide experience for students
                in fields ranging from bioengineering to mechanical engineering to
                architecture. To learn more about our current and past projects, click{" "}
                <b><a href="/projects">here!</a></b>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h3><img src={workshops} width='25px'/> Workshops &amp; Tutorials</h3>
              </Card.Title>
              <Card.Text>
                Workshops and tutorials for both McGill University students and
                students at surrounding high schools and CEGEPs. Topics include
                <b> bioinformatics, bioengineering,</b> and <b>CAD.</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h3><img src={community} width='25px'/> Community</h3>
              </Card.Title>
              <Card.Text>
                Social and networking events bringing together diverse McGill students from
                <b> three faculties</b> and <b>twelve departments</b>. Events include movie nights,
                picnics, and research inspired discussion groups.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);
