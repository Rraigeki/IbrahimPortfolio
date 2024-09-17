import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Tilt from "react-parallax-tilt";
import Type from "./Type";

//
import ProjectCards from "../Projects/ProjectCards";
import witchcraft from "../../Assets/Projects/witchcraft.png";
import HeroKnight from "../../Assets/Projects/HeroKnight.png";
import dominos2 from "../../Assets/Projects/dominos2.png";
import HeroKnightVid from "../../Assets/Projects/Videos/HeroKnightVid.mp4";
import DominosVid from "../../Assets/Projects/Videos/DominosVid.mp4";
import SoulsLikeVid from "../../Assets/Projects/Videos/SoulsLikeVid.mp4";
import BCVid from "../../Assets/Projects/Videos/BCVid.mp4";
import Worms from "../../Assets/Projects/Videos/Worms.mp4";
//

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> IBRAHIM LAZRAK </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              </Tilt>
            </Col>
          </Row>
        </Container>
        <Home2 />
      
      
      <Container fluid id="about">
        <About />
      </Container>

      <Container fluid id="projects">
        <Projects />
      </Container>
      </Container>
    </section>
  );
}

export default Home;
