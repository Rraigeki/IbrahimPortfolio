import React from 'react';
import { useParams } from 'react-router-dom';
import SoulsLikeVid from "../Assets/Projects/Videos/SoulsLikeVid.mp4";
import HeroKnightVid from "../Assets/Projects/Videos/HeroKnightVid.mp4";
import BCVid from "../Assets/Projects/Videos/BCVid.mp4";
import smartsportVid from "../Assets/Projects/Videos/DominosVid.mp4";
import wormsVid from "../Assets/Projects/Videos/Worms.mp4";

// Project data with video paths and descriptions
const projectData = {
  soulslike: {
    title: "SoulsLike",
    description: "A challenging action RPG with an advanced combat system, developed in Unreal Engine 5. Navigate through a dark world, mastering strategy and skill to overcome tough enemies.",
    videoPath: SoulsLikeVid,
    about:"SoulsLike was my End-Year project for my software engineering degree. You play as a fallen hero that navigate through the map kill different enemies and awsome bosses.",
    introduction:"This project was made in order for me to get better at Unreal Engine 5, C++ ,Blueprints and Behaviour Trees.<br/>In this project I focused on gameplay mechanics and combat system like managing movement, stats bar like health and stamina, different type of attacks and its effects and ofcourse a little bit of animation like drawing weapons , getting hit and different type of attack in order to give the game some life.",
    learned:"I learned how to use Unreal Engine 5 and blueprints better.<br />This was my first big'ish project ever done on Unreal Engine 5. I was amazed of how much opportunities Blueprints and unreal Engine 5 actually provides to the developer to make whatever game , or mechanic they want."  ,
    techused:"Unreal Engine 5, C++ , Blueprints, Behavior Trees."
  },
  heroknight: {
    title: "HeroKnight",
    description: "HeroKnight is a 2D side-scroller where you play as a knight battling enemies and jumping through obstacles. It's a straightforward action game with advanced mechanics, similar to classic platformers.",
    about: "HeroKnight is a 2D side-scroller created in Unity, where players take on the role of a knight embarking on a heroic quest. The game features fast-paced action, challenging enemies, and immersive environments that harken back to classic platformer games like Super Mario, but with a unique combat twist.",
    introduction: "This game was my introduction to Unity and C#. As my first fully completed project, I focused on creating dynamic gameplay mechanics, including movement, wall-jumping, blocking, dodging, rolling, and managing health and stamina through stats bars. I also implemented a variety of attack types with distinct effects and animations, and developed AI behavior for the different NPCs to bring life to the game.",
    learned: "Finishing this game gave me a deep understanding of Unity and C#. I gained confidence in my ability to create and polish small games, and it showed me the importance of blending gameplay mechanics with fluid animations and responsive AI.",
    techused: "Unity 2D, C#.",
    videoPath: HeroKnightVid
  },
  witchandcraft: {
    title: "Witch and Craft",
    description: "A 3D demo where you follow quests, collect items, talk to NPCs, and use a staff to fight large insects roaming in the village. Created as a demonstration of game development skills in Unity.",
    about: "This Unity 3D game demo was created as a test for a job interview. In this demo, the player follows a series of quests, like collecting samples and flowers, and interacts with NPCs to receive new missions. The game also features combat, where the player uses a staff to shoot projectiles and defeat large spiders roaming the village.",
    introduction: "This project was designed to test my skills in Unity 3D. The game focuses on quest mechanics, NPC interactions, and simple combat. The mission includes collecting items and battling enemies with projectile-based attacks. It allowed me to showcase my abilities in Unity and game development, and successfully helped me secure an internship.",
    learned: "I gained confidence in my Unity 3D skills and learned how to combine quest mechanics, NPC dialogues, and combat into a cohesive gameplay experience. This demo was crucial in landing my internship, as it demonstrated my abilities in game development.",
    techused: "Unity 3D, C#.",
  },
  behaviorcloning: {
    title: "Behavior Cloning",
    description: "A small project of AI mimicing player gameplay in vehicule racing game.",
    videoPath: BCVid,
    about:"Behavior Cloning is my End-year project. You control a car and you will see that AI will slowly starts to learn from your actions and starts mimicing your gameplay to finally plays exactly as you do.",
    introduction:"This project made in order for me to push my knowledge and limits of AI in video games as its a fine specified topic.",
    learned:"I learned how to integrate python scripts and AI in my projects in Unreal Engine 5.<br />This was my first AI project ever done on Unreal Engine 5."  ,
    techused:"Unreal Engine 5, Learning Agent 5.4 , Pythorch, C++, Blueprints."
  },
  smartsport: {
    title: "Dominos",
    description: "A digital version of the classic dominos game for both PC and Android, developed using Unity 2D. Play against AI or friends in this fun and strategic tile-based game.",
    videoPath: smartsportVid,
    about: "The Dominos game was developed for a client to create a digital adaptation of the popular dominos game for multiple platforms, specifically PC and Android. The game offers a clean, user-friendly interface, allowing players to enjoy classic dominos matches against AI opponents or friends.",
    introduction: "This project helped me improve my skills in Unity 2D and C#, focusing on building smooth gameplay mechanics, including tile matching, turn-based play, and multiplayer functionalities. I also worked on the UI/UX to ensure the game is both visually appealing and easy to navigate. I incorporated local multiplayer so players could play together on a single device.",
    learned: "Improved my understanding and skills of Unity 2D development and also enhanced my skills in C#. I became more proficient in creating mobile-friendly games, optimizing the game's performance for Android devices.",
    techused: "Unity 2D, C#, Android Development."
  },
  wormsarmageddon: {
    title: "Worms Armageddon Remake",
    description: "A remake of the classic Worms Armageddon using Unreal Engine 5, where I utilized PaperZD to bring a 2D game to life in an engine that no longer natively supports 2D environments.",
    videoPath: wormsVid,
    about: "This project was my first experience with Unreal Engine, where I remade the classic Worms Armageddon. Since Unreal no longer supports 2D games, I used PaperZD to recreate the 2D environment. Everything, from game mechanics to level design, was developed by me, with the exception of character animations sourced from the internet.",
    introduction: "I embarked on this project to learn Unreal Engine and familiarize myself with its tools. I rebuilt the game’s physics, weapon mechanics, and interactions using Unreal’s Blueprints and PaperZD for 2D animations. This allowed me to explore the complexities of Unreal, despite it not being designed for 2D development.",
    learned: "This project taught me a lot about Unreal Engine 5, particularly in working around its limitations with 2D games. I improved my skills in Blueprints, asset management, and 2D game development using PaperZD.",
    techused: "Unreal Engine 5, PaperZD, Blueprints, C++, Asset Management.",
}
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
        <h2 className="project-title">Description</h2>
        <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />
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
 