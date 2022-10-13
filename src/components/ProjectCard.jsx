import React from 'react';
import me_large from '@images/Rodrigo.jpeg'
import LanguageIcon from '@mui/icons-material/Language';
import PaletteIcon from '@mui/icons-material/Palette';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function ProjectCard({category, img, icon, description}) {
  function showModal(title){
    let modal = document.querySelector(".modal");
    let body = document.querySelector("body");
    modal.style.display = "grid";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }
  return (
  <>
    <div className={`projects__${category} projects-category`}>
      <img src={img} alt={category} />
      <div className='projects__info'>
        {icon}
        <h4>{category} Projects</h4>
      </div>
      <div className='projects__info--hidden'>
        <h4>{category} projects</h4>
        <p>{description}</p>
        <button onClick={()=>showModal(category)} className='projects-category__button'>View Projects</button>
      </div>
    </div>
  </>
  );
}

export default ProjectCard;