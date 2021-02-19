import React, {useState} from 'react';
import './ProjectItem.css';

const ProjectItem = ({project}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      style={{background: project.color}}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      className="project__item"
    >
      <div className="project__logo">
        <i className={project.icon}></i>
      </div>
      <h3
        className={
          hovering ? 'project__overlay--visible' : 'project__overlay--hidden'
        }
      >
        {hovering ? project.name : null}
      </h3>
    </div>
  );
};

export default ProjectItem;
