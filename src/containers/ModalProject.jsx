import React from 'react';
import TitleSection from '../components/TitleSection';

function ModalProject({title2, subtitle2}) {
  return (
    <>
      <section className='modal'>
        <TitleSection title={title2} subtitle={subtitle2} />
      </section>
    </>
  );
}

export default ModalProject;