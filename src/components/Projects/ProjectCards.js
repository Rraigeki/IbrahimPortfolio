import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    const projectId = props.title.toLowerCase().replace(/\s+/g, "");
    navigate(`/projects/${projectId}`);
  };

  const renderMedia = () => {
    if (props.videoPath) {
      return (
        <video
          className="gif-like-video"
          muted
          loop
          playsInline
          ref={(video) => {
            if (video) {
              isHovered ? video.play() : video.pause();
            }
          }}
        >
          <source src={props.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (props.imgPath) {
      return <Card.Img variant="top" src={props.imgPath} alt="card-img" />;
    } else {
      return null;
    }
  };

  return (
    <Card
      className="project-card-view"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {renderMedia()}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" onClick={(e) => e.stopPropagation()}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
