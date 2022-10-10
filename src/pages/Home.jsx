import React from 'react';
import Hero from '@containers/Hero';
import Projects from '@containers/Projects';
import ModalProject from '../containers/ModalProject';

function Home() {
  return (
    <>
      <Hero/>
      <Projects/>
      <ModalProject title="asd" subtitle="asd" waveswavesFlag={false}/>
    </>
  );
}

export default Home;