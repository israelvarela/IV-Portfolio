import React from "react";
import "../Header/style.css";
import Profilepic from "./images/israel varela commercial head shot.jpg";

function About() {
  return (
    <div>
      <Navbar />

      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col size="md-6">
            <h1>About Me</h1>
            <p>
              <h2>Who is Israel Varela?</h2>
              I am Full Stack Web Developer with an eye for business applications and functional use cases to drive usage of the applications I develop. Having worked on several Wordpress websites over the years for personal use, as well as for clients I decided it was time to step up my knowledge of coding for wider applications and development. I enrolled in Southern Methodist University's Full Stack Web Development program where I would go on to learn many of the in demand programming languages and frameworks utilized in today's competitive technology workforce. Having graduated with a certificate in Full Stack Web Development I am looking for a challenging opportunity with a forward thinking company so we can build some great things together.

              As a seasoned professional I have tackled many roles
              in my life from marketing and data analytics, to residential real estate sale as well as acting in commericals, industrials, short films, feature films and nationally syndicate television shows. When I am not working I enjoy running, working out, camping, hiking, fishing, spending time with my family and volunteering to give back to the community.
              
            </p>
          </Col>
          <Col size="md-6">
            <br />
            <img
              src={Profilepic}
              alt={"israel varela headshot"}
              height={300}
              width={300}
            ></img>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default About;
