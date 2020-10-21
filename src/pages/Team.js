import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import kimia from "../img/execs/kimia.png";
import megan from "../img/execs/megan.png";
import andrew from "../img/execs/andrew.png";
import zoe from "../img/execs/zoe.png";
import justin from "../img/execs/justin.png";
import anne from "../img/execs/anne.png";
import elizabeth from "../img/execs/elizabeth.png";
import victoria from "../img/execs/victoria.png";
import bernadette from "../img/execs/bernadette.png";
import tirza from "../img/execs/tirza.png"
import linkedin from "../img/icons/exec-linkedin.png"

export const Team = () => (
  <Container fluid>
    <h1>Meet the 2020-2021 McGill BioDesign Team!</h1>
    <hr></hr>
    <Row>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={kimia} alt="Kimia Shafighi"/>
          <Card.Body>
            <Card.Title><h2>Kimia Shafighi <a href="https://www.linkedin.com/in/kimia-shafighi-8032b117b"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Co-President</h3>
              <h3 className="title">Team Lead: Bluband, Lily Pad</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Kimia is a U4 Bioengineering student, striving to make McGill
              BioDesign a great design team where students from all fields of study
              can learn, research, and create innovative and interesting biodesign
              projects, ranging from biomimicry buildings to biodegradable
              sunscreens. She enjoys drinking tea, writing, and biking. Feel free to
              reach out to her during her office hours: 1am - 3am.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={megan} alt="Megan Wai"/>
          <Card.Body>
            <Card.Title><h2 >Megan Wai <a href="https://www.linkedin.com/in/megan-wai-a51796149"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Co-President</h3>
              <h3 className="title">Team Lead: Lily Pad</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Megan is a U3+ Bioengineering student from Montreal. She is always
              enthusiastic to work on new projects with passionate design team
              members. She is responsible for coordinating the team and overseeing
              all of McGill BioDesign's projects. She enjoys cooking up a killer
              five course meal, running up and down Mont Royal, and meeting new
              people. If you ever have any questions or concerns, feel free to email
              her!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={andrew} alt="Andrew Breahna"/>
          <Card.Body>
            <Card.Title><h2>Andrew Breahna <a href="https://www.linkedin.com/in/andrew-breahna-036910152"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Vice President Finance</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Andrew is a U2 student majoring in Finance and minoring in Computer
              Science. He is primarily in charge of McGill BioDesign's budget and
              funding applications. When not in Bronfman, he is likely working out,
              playing golf, or testing out new cooking recipes.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={zoe} alt="Zoe Goldberger"/>
          <Card.Body>
            <Card.Title><h2>Zoe Goldberger <a href="https://www.linkedin.com/in/zoegoldberger"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Vice President Social</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Zoe is a U2 Bioengineering student from Chicago. She is responsible
              for creating, organizing, and overseeing events throughout the year.
              These will foster a deeper sense of community and be a ton of fun! In
              her spare time she enjoys travelling, eating good food, and talking to
              old people.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={justin} alt="Justin Kashi"/>
          <Card.Body>
            <Card.Title><h2>Justin Kashi <a href="https://www.linkedin.com/in/justin-kashi"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Vice President External</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Justin is a U2 Bioengineering student who hopes to create a wide
              network of sponsorship connections for BioDesign while learning key
              liaison skills. He aims to understand how to transition from an idea
              to a final prototype in both an engineering and marketing perspective. 
              You can most likely find him making his fifth expresso of the day; he 
              also somehow manages to alwys die first at Among Us.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={anne} alt="Anne Kyung"/>
          <Card.Body>
            <Card.Title><h2>Dahyun (Anne) Kyung <a href="https://www.linkedin.com/in/dahyun-anne-kyung"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Vice President Design</h3>
              <h3 className="title">Team Lead: Lily Pad</h3> 
            </Card.Subtitle>
            <Card.Text className="blurb">
              Anne is a U2 Bioengineering student from Oakville, Ontario. Her job is
              to coordinate the overall aesthetic of the team. Some of her tasks
              include designing merchandise and promotional material, working with
              team leads to find a brand for their projects, and communicating with
              artists and designers to ensure that McGill BioDesign's visual content
              is of a consistently high quality. Outside of BioDesign, Anne is part
              of McGill Power to Change and I Medici di McGill Orchestra, in which
              she plays the violin. Her (nerdy) hobbies include music, trivia, and
              more recently, sudoku.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={elizabeth} alt="Elizabeth O'Meara"/>
          <Card.Body>
            <Card.Title><h2>Elizabeth O'Meara <a href="https://www.linkedin.com/in/elizabeth-omeara"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Vice President Internal</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Libby is a U4 Bioengineering student from Montreal. She is responsible
              for maintaining organization within the team and keeping everyone on
              their deadlines. She loves receiving feedback from members, and is
              constantly finding new ways to improve the team. Beyond BioDesign, she
              is an active participant in the McGill Brewing Club, and loves reading
              and kickboxing.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={victoria} alt="Victoria Pittard"/>
          <Card.Body>
            <Card.Title><h2>Victoria Pittard <a href="https://www.linkedin.com/in/victoria-pittard"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Vice President Communications</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Victoria is a U3+ Computer Science and Biology student from New York.
              She is responsible for maintaining the McGill BioDesign website,
              social media pages, and listserv campaigns. Outside of BioDesign, she
              is involved with the Computer Science Undergraduate Society and the
              Office for Students with Disabilities mentorship program. She is
              passionate about public health, and can normally be found reading or
              drawing at a cafe.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={bernadette} alt="Bernadette Ng"/>
          <Card.Body>
            <Card.Title><h2>Bernadette Ng <a href="https://www.linkedin.com/in/bernadette-ng-430047185"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Team Lead: Water Filtration Backpack</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Bernadette is a U2 Mechanical Engineering student. When she isn't
              studying in McConnell MD-50, she is either deadlifting at the gym or
              training with her competitive dragon boat team. As one of the team
              leads, she is looking forwards to working, learning, creating, and
              designing alongside a team of dedicated members. If you are interested
              to learn more about the project, don't hesitate to reach out to her!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} lg={4} className="column">
        <Card className="tile">
          <Card.Img variant="top" src={tirza} alt="Tirza Pang"/>
          <Card.Body>
            <Card.Title><h2>Tirza Pang <a href="https://www.linkedin.com/in/tirza-pang-9b8106194"><img src={linkedin} height='35px'/></a></h2></Card.Title>
            <Card.Subtitle className="title">
              <h3 className="title">Team Lead: Water Filtration Backpack</h3>
            </Card.Subtitle>
            <Card.Text className="blurb">
              Tirza is a U2 Chemical Engineering student. She is excited to be a
              part of the McGill BioDesign team, working on the water filtration
              backpack to help those in developing countries more easily access
              water. She is also part of the stopping mech for McGill's Chem-E car.
              In her spare time, she loves to play badminton, figure skate, watch
              TV, and most especially eat anything with an abundant amount of sugar.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
