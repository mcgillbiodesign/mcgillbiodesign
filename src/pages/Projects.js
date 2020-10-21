import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import activaid from "../img/icons/activaid.png";
import backpack from "../img/icons/backpack.png";
import baculovirus from "../img/icons/baculovirus.png";
import bluband from "../img/icons/bluband.png";
import lilypad from "../img/icons/lilypad.png";
import maascreen from "../img/icons/maascreen.png";

export const Projects = () => (
  <Container fluid>
    <section id="current">
      <h1>Current Projects</h1>
      <Row>
        <Col xs={12} md={6} lg={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
               <h2><img src={backpack} height='30px'/>Water Filtration Backpack</h2>
              </Card.Title>
              <Card.Subtitle>
                <h3 className="title">Team Leads: Bernadette Ng &amp; Tirza Pang</h3>
                <h3 className="title">Subteam Leads: Neil Banik, Zoe Goldberger, Frank Li, &amp; Mary Wan</h3>
              </Card.Subtitle>
              <Card.Text>
                Our water filtration backpack aims to help communities with limited
                access to drinking water by filtering water during transit from the
                water source back to homes and being comfortable to wear for this
                time. It will incorporate a macro filter, for particles, a micro
                filter, for microbes, and a sensor indicating water drinkability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h2><img src={lilypad} height='30px'/> Air Purification Lilypads</h2>
              </Card.Title>
              <Card.Subtitle>
                <h3 className="title">Team Leads: Anne Kyung, Kimia Shafighi, &amp; Megan Wai</h3>
                <h3 className="title">Subteam Leads: Tahsin Abedi, Justin de Vries, Shagun Sachar, Hasan Sagheer, Victoria Pittard</h3>
              </Card.Subtitle>
              <Card.Text>
                In order to address air pollution, we are designing a 3D printed lily
                pad, or lotus, shaped structure incorporating biofilms to degrade
                pollutants in the air. This is a cheaper and more sustainable
                alternative to current biofilter plants.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h2><img src={bluband} height='30px'/> BluBand</h2>
              </Card.Title>
              <Card.Subtitle>
                <h3 className="title">Team Lead: Kimia Shafighi</h3>
              </Card.Subtitle>
              <Card.Text>
                BluBand is a transmitter capable of transforming short-wave radio
                frequency signal into a cellular signal. It can attach to the glucose
                sensors worn by diabetic children attending Camp Carowanis and
                continuously monitor their blood sugar levels both day and night.
                BluBand is waterproof and easy to wear, making it ideal for children
                at the camp.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
    <hr></hr>
    <section id="past">
      <h1>Past Projects</h1>
      <Row>
        <Col xs={12} md={6} lg={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h2><img src={baculovirus} height='30px'/> Baculovirus Gene Therapy</h2>
              </Card.Title>
              <Card.Subtitle>
                <h3 className="title">Year: 2019-2020</h3>
                <h3 className="title">Team Lead: Elizabeth O'Meara</h3>
              </Card.Subtitle>
              <Card.Text>
                The Baculovirus team worked to develop a transient gene therapy
                delivery system using baculoviruses. Particular focus was given to
                growth fators critical to the healing process that are lacking in many
                chronic wounds, such as diabetic foot ulcers. Unfortunately, this
                project was halted by the COVID-19 pandemic.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h2><img src={activaid} height='30px'/> Activaid</h2>
              </Card.Title>
              <Card.Subtitle>
                <h3 className="title">Year: 2018-2020</h3>
                <h3 className="title">Team Lead: Anne Kyung</h3>
              </Card.Subtitle>
              <Card.Text>
                ActivAid is a novel interactive bacterial cellulose wound dressing
                targetting venous ulcers. It includes innovative components that help
                maintain an ideal wound environment in order to prevent infection and
                accelerate healing. Although COVID-19 prevented the creation of a
                prototype for ActivAid, the design was submitted to Venturewell's
                DEBUT competition in June 2020.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="column">
          <Card className="tile">
            <Card.Body>
              <Card.Title>
                <h2><img src={maascreen} height='30px'/>MAAscreen</h2>
              </Card.Title>
              <Card.Subtitle>
                <h3 className="title">Year: 2018-2019</h3>
                <h3 className="title">Team Lead: Ella Reifsnyder</h3>
              </Card.Subtitle>
              <Card.Text>
                MAAscreen is an eco-friendly and biodegradable sunscreen. Conventional
                sunscreens utilize chemical UV filters that threaten the marine
                environment, while MAAscreen extracts mycosporine like amino acids
                (MAAs) from algae as a more sustainable alternative.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  </Container>
);
