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
        {/* <div style={styles.leftArrow}>Left Arrow</div> */}
        {projects.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
        {/* <div style={styles.rightArrow}>Right Arrow</div> */}

      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '0 50px'
  },
  header: {
    // marginLeft: '30px',
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
  // leftArrow: {
  //   color: 'blue',
  //   position: 'absolute',
  //   left: '0'
  //   // margin: 'auto 0'
  // },
  // rightArrow: {
  //   color: 'blue',
  //   position: 'absolute',
  //   right: '0'
  //   // margin: 'auto 0'
  // }
};
export default ProjectList;
