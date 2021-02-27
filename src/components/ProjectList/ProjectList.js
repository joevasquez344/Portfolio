import React, {useState} from 'react';
import './ProjectList.css';

import ProjectItem from '../ProjectItem/ProjectItem';

import {data} from '../../projects';

const ProjectList = () => {
  const [projects, setProjects] = useState(data);
  return (
    <div style={styles.container}>
      <h2>
        <span style={styles.header}>Projects</span>{' '}
        <span className="project__listSubHeader">View All</span>
      </h2>
      <div className="project__list">
        {projects.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '0 50px'
  },
  header: {
    marginBottom: '30px',
    color: '#777',
    fontWeight: 400,
  },
  subHeader: {
    fontSize: '.9rem',
    marginLeft: '5px',
    color: 'dodgerblue',
    background: 'transparent',
    borderRadius: '500px',
    border: '1px solid dodgerblue',
    padding: '2px 15px',
    cursor: 'pointer',
  },
};
export default ProjectList;
