import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import ProjectList from '../../components/ProjectList/ProjectList';

const Landing = () => {
  return (
    <div className="landing">
      {/* <Navbar /> */}
      <Hero />
      <ProjectList />
    </div>
  );
};

export default Landing;
