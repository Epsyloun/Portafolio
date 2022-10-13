import React from 'react';
import ProjectSlide from '../components/ProjectSlide';
import TitleSection from '../components/TitleSection';

function ModalProject({title, subtitle}) {
  function closeModal(title){
    let modal = document.querySelector(".modal");
    let body = document.querySelector("body");
    modal.style.animation = "disappear-animation 0.5s"
    setTimeout(() => {
      modal.style.display = "none";
      body.style.height = "auto";
      body.style.overflow = "auto";
      modal.style.animation = "appear-animation 0.5s"
    }, 500);
  }
  return (
    <>
      <section className='modal'>
        <TitleSection title={title} subtitle={subtitle} />
        <button className='modal__close' onClick={()=>closeModal(title)}>X</button>
        <ProjectSlide num="1"/>
        <ProjectSlide num="2"/>
        <ProjectSlide num="3"/>
        <ProjectSlide num="4"/>
      </section>
    </>
  );
}

export default ModalProject;