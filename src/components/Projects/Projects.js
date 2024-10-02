import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";

import witchcraft from "../../Assets/Projects/witchcraft.png";
import HeroKnight from "../../Assets/Projects/HeroKnight.png";
import dominos2 from "../../Assets/Projects/dominos2.png";
import HeroKnightVid from "../../Assets/Projects/Videos/HeroKnightVid.mp4";
import DominosVid from "../../Assets/Projects/Videos/DominosVid.mp4";
import SoulsLikeVid from "../../Assets/Projects/Videos/SoulsLikeVid.mp4";
import BCVid from "../../Assets/Projects/Videos/BCVid.mp4";
import Worms from "../../Assets/Projects/Videos/Worms.mp4";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <h1 className="project-heading">
          Game <strong className="purple">Programming </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCards
              videoPath={SoulsLikeVid}
              isBlog={false}
              title="SoulsLike"
              description="Souls-like Game with Advanced Combat System is a challenging action RPG developed using Unreal Engine 5. This game features a deep and intricate combat system, requiring players to master timing, strategy, and skill to defeat enemies ..."
              ghLink="https://drive.google.com/drive/folders/1PESz_y3p_LlmaBdyUhQbiLfOlpDHY7GF?usp=drive_link"
              demoLink="https://youtu.be/HYxvh69Uadg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              videoPath={HeroKnightVid}
              isBlog={false}
              title="HeroKnight"
              description="Hero Knight is a 2D side-scroller game created in Unity and C# , reminiscent of classic platformers like Super Mario. In this adventure, players control a valiant knight armed with a sword and shield, navigating through various levels filled with challenging enemies. The knight must skillfully use his sword and shield to defeat foes and overcome obstacles, making for an exciting gameplay experience."
              ghLink="https://github.com/Rraigeki/HeroKnight"
              demoLink="https://youtu.be/a1l9yv18Mzk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={witchcraft}
              isBlog={false}
              title="Witch and Craft"
              description="Witch and Craft is a 3D game demo developed in Unity, where players explore a lush jungle environment. Taking on the role of a spellcaster, players complete various objectives and battle enemies using their staff and powerful spells. This immersive demo showcases captivating visuals and dynamic gameplay."
              demoLink="https://youtu.be/iAmeZXckum8"
              ghLink="https://drive.google.com/file/d/17iThOvYXyMKJzIpYylQNxAsgQHspFpUd/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              videoPath={BCVid}
              isBlog={false}
              title="Behavior Cloning"
              description="Behavioral Cloning Vehicle Game is an innovative project where AI mimics the gameplay of human players in a vehicle-based environment. Implemented in Unreal Engine 5.4 using the Agents Learning plugin, this game showcases advanced imitation learning techniques. Players navigate vehicles through complex terrains, with the AI learning and replicating their driving behaviors to create a dynamic and interactive experience."
              demoLink="https://youtu.be/mM7a91IuEfI/"
              ghLink="https://drive.google.com/file/d/1QL4Rmk7bkT27uvAsxDZt9f-KoZwYRjTA/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              videoPath={DominosVid}
              isBlog={false}
              title="Smart Sport"
              description="Smart Sport is an engaging digital adaptation of the classic Dominos board game, developed for both PC and Android platforms using Unity. Can be played with an AI or with a friend of yours."
              demoLink="https://youtu.be/YAtgQAVaffw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              videoPath={Worms}
              isBlog={false}
              title="Worms Armageddon"
              description="Worms Armageddon Remake is a modern remake of the classic turn-based strategy game, developed using Unreal Engine 5. This remake retains the original's chaotic and humorous gameplay, where players control a team of worms and use a variety of weapons to outmaneuver and eliminate their opponents."
              demoLink="https://youtu.be/YSdKY1CHntc"
            />
          </Col>
        </Row>
         <h1 className="project-heading">
          Soft <strong className="purple">Programming </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on <strong className="purple">(still uploading them) </strong>
        </p>
     
        {/*
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={HeroKnight}
              isBlog={false}
              title="kbe chart gen"
              description="xxxxxxxxxxxxxxxxxxxxxx."
              ghLink=""
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={bitsOfCode}
              isBlog={false}
              title="Prod+"
              description="xxxxxxxxxxxxxxxxx."
              ghLink=""
              demoLink=""
            />
          </Col>

          
        </Row>*/}
      </Container>
    </Container>
  );
}

export default Projects;
