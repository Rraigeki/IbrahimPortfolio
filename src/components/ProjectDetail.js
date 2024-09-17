import React from 'react';
import { useParams } from 'react-router-dom';
import SoulsLikeVid from "../Assets/Projects/Videos/SoulsLikeVid.mp4";
import HeroKnightVid from "../Assets/Projects/Videos/HeroKnightVid.mp4";
import BCVid from "../Assets/Projects/Videos/BCVid.mp4";

// Project data with video paths and descriptions
const projectData = {
  soulslike: {
    title: "SoulsLike",
    description: "A challenging action RPG with an advanced combat system, developed in Unreal Engine 5. Navigate through a dark world, mastering strategy and skill to overcome tough enemies.",
    videoPath: SoulsLikeVid,
    about:"SoulsLike was my End-Year project for my software engineering degree. You play as a fallen hero that navigate through the map kill different enemies and awsome bosses.",
    introduction:"This project was made in order for me to get better at Unreal Engine 5, C++ ,Blueprints and Behaviour Trees.<br/>In this project I focused on gameplay mechanics and combat system like managing movement, stats bar like health and stamina, different type of attacks and its effects and ofcourse a little bit of animation like drawing weapons , getting hit and different type of attack in order to give the game some life.",
    learned:"I learned how to use Unreal Engine 5 and blueprints better.<br />This was my first big'ish project ever done on Unreal Engine 5. I was amazed of how much opportunities Blueprints and unreal Engine 5 actually provides to the developer to make whatever game , or mechanic they want."  ,
    techused:"C++ , Blueprints, Behavior Trees."
  },
  heroknight: {
    title: "HeroKnight",
    description: "A 2D side-scroller created in Unity. Embark on a heroic journey as a knight, battling enemies and overcoming obstacles in a world reminiscent of classic platformers.",
    videoPath: HeroKnightVid,
  },
  behaviorcloning: {
    title: "Behavior Cloning",
    description: "A small project of AI mimicing player gameplay in vehicule racing game.",
    videoPath: BCVid,
    about:"Behavior Cloning is my End-year project. You control a car and you will see that AI will slowly starts to learn from your actions and starts mimicing your gameplay to finally plays exactly as you do.",
    introduction:"This project made in order for me to push my knowledge and limits of AI in video games as its a fine specified topic.",
    learned:"I learned how to integrate python scripts and AI in my projects in Unreal Engine 5.<br />This was my first AI project ever done on Unreal Engine 5."  ,
    techused:"Learning Agent 5.4 , Pythorch, C++, Blueprints."
  },
  // Add more projects here as needed
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    
    <div className="project-details">
      <h1 className="project-title">{project.title}</h1>
      <div className="video-container">
        <video
          className="project-video"
          src={project.videoPath}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </div>
      
      

      <div className="box">
        <h2 className="project-title">About</h2>
        <p className="project-description" dangerouslySetInnerHTML={{ __html: project.about }} />
      </div>

      <div className="box">
        <h2 className="project-title">Introduction</h2>
        <p className="project-description" dangerouslySetInnerHTML={{ __html: project.introduction }} />
      </div>

      <div className="box">
        <h2 className="project-title">What I Learned</h2>
        <p className="project-description" dangerouslySetInnerHTML={{ __html: project.learned }} />
      </div>
      <div className="box">
        <h2 className="project-title">Technologies Used</h2>
        <p className="project-description" dangerouslySetInnerHTML={{ __html: project.techused }} />
      </div>
    </div>
  );
}

export default ProjectDetails;
 