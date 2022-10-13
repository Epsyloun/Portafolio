import React, { useState,useEffect } from 'react';

function ProjectSlide({num}) {
  return (
    <div className={`modal__slide slide__${num}`}>
      <div className='slide__content'></div>
    </div>
  );
}

export default ProjectSlide;