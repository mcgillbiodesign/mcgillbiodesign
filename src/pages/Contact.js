import React from "react";
import { Container } from "react-bootstrap";
import email from "../img/icons/email.png";
import facebook from "../img/icons/facebook.png";
import linkedin from "../img/icons/linkedin.png";
import instagram from "../img/icons/instagram.png";

export const Contact = () => (
  <Container fluid>
    <h1>Stay in touch!</h1>
    <hr></hr>
    <div>
      <h3><img src={email} height='30px'/> Email</h3>
      <a href="mailto:biodesign@mcgilleus.ca">biodesign@mcgilleus.ca</a>
    </div>
    <p></p>
    <div>
      <h3><img src={facebook} height='30px'/> Facebook</h3>
      <a href="facebook.com/McGillBiodesign">facebook.com/McGillBiodesign</a>
    </div>
    <p></p>
    <div>
      <h3><img src={instagram} height='30px'/> Instagram</h3>
      <a href="instagram.com/mcgillbiodesign">instagram.com/mcgillbiodesign</a>
    </div>
    <p></p>
    <div>
      <h3><img src={linkedin} height='30px'/> LinkedIn</h3>
      <a href="https://www.linkedin.com/company/mcgill-biodesign-team/">
        https://www.linkedin.com/company/mcgill-biodesign-team/
      </a>
    </div>
  </Container>
);
