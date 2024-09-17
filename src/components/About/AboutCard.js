import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Ibrahim Ben Lazrak. </span>
            <br/>
            I have completed Software Engineering and I have a Bachelor Degree in Industrial Computer Science .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Compete in worldwide video game tournaments and events
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating gaming and developement events
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Drums and Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Managing E-sports teams
            </li>
          </ul>

          <p style={{ color: "#0d92ff" }}>
            "Once you do the hard stuff, It becomes not that hard."{" "}
          </p>
          <footer className="blockquote-footer">Ibrahim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
