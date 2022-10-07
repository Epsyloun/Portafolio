import React from 'react'
import me_large from '@images/Rodrigo.jpeg'
import LanguageIcon from '@mui/icons-material/Language';
import PaletteIcon from '@mui/icons-material/Palette';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Projects() {
  const largeIcon = {fontSize:'3em', textAlign:'center'}
  return (
  <section id='Projects' className='projects'>
    <div className='projects__title'>
      <h2>Projects</h2>
      <p>Projects category</p>
    </div>
    <div className='projects__web projects-category'>
      <LanguageIcon sx={largeIcon}/>
      <h4>Web Projects</h4>
    </div>
    <div className='projects__design projects-category'>
      <PaletteIcon sx={largeIcon}/>
      <h4>UI/UX Projects</h4>
    </div>
    <div className='projects__mobile projects-category'>
      <PhoneAndroidIcon sx={largeIcon}/>
      <h4>Mobile Projects</h4>
    </div>
  </section>
  );
}

export default Projects;