import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate programmer with a primary focus on <i> <b className="purple">video game development</b>, </i> 
              with experience in building <b className="purple">modern websites, mobile, desktop applications</b>, my expertise shines in the realm of<b className="purple"> gameplay programming.</b> 😀
              <br />
              <br />I'm proficient in industry-standard languages like
              <i>
                <b className="purple"> C#, C++, C, and Javascript </b>
              </i>
              which allows me to smoothly transition between game engines and software platforms.
              <br />
              <br />
              While video game development is my primary passion, I also enjoy applying my skills to   &nbsp;
              <i>
                <b className="purple">create dynamic websites and mobile apps. </b>    <br/>     <br/>       
                <b className="purple">Let’s create something amazing! </b>               
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rraigeki7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Rraigeki7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ibrahim-ben-lazrak/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ibrah1m.la"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
             <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=benlazrakibrahim@gmail.com"
               target="_blank" 
               rel="noreferrer"
               className="icon-colour home-social-icons"
             >
               <SiGmail/>
             </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
