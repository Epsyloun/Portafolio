import React, { useState,useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectSlide({num, image, icon , title, desc,link, git}) {
  function OpenProject(){
    window.open(link, '_blank');
  }
  return (
    <div id="#modal" className={`modal__slide slide__${num}`}>
      <div className='slide__content'>
        {icon}
        <h2 className='slide__title'>{title}</h2>
        <p className='slide__desc'>{desc}</p>
        <button onClick={OpenProject} className='slide__button'>View</button>
        <a className='slide__git' href={git} target="_blank"><GitHubIcon sx={{fontSize:"2.5em"}}/></a>
        <img className='slide__img' src={image} alt={num} />
      </div>
    </div>
  );
}

export default ProjectSlide;