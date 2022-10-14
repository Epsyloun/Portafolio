import React from "react";
import ProjectSlide from "../components/ProjectSlide";
import TitleSection from "../components/TitleSection";
import web_projects from "@images/web-projects.png";

import Friche from "@images/desktop/FricheAdminApp.png";
import DashboardIcon from "@mui/icons-material/Dashboard";

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Yard from "@images/desktop/YardSale.png";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Todo from "@images/desktop/TodoApp.png";

import GifBoxIcon from '@mui/icons-material/GifBox';
import GifExpert from "@images/desktop/GifExpert.png";

function ModalProject({ title, subtitle }) {
  function closeModal() {
    let modal = document.querySelector(".modal");
    let body = document.querySelector("body");
    modal.style.animation = "disappear-animation 0.5s";
    setTimeout(() => {
      modal.style.display = "none";
      body.style.height = "auto";
      body.style.overflow = "auto";
      modal.style.animation = "appear-animation 0.5s";
    }, 500);
  }
  return (
    <>
      <section className="modal">
        <TitleSection title={title} subtitle={subtitle} />
        <button className="modal__close" onClick={() => closeModal()}>
          X
        </button>
        <ProjectSlide
          num="1"
          image={Friche}
          icon={<DashboardIcon className="slide__icon" />}
          title={"Friche Admin App"}
          desc={"Administration page for a candy grocery store"}
          link={"https://epsyloun.github.io/FricheAdminApp/"}
          git={"https://github.com/Epsyloun/FricheAdminApp"}
        />
        <ProjectSlide
          num="2"
          image={Yard}
          icon={<MonetizationOnIcon className="slide__icon" />}
          title={"Yard Sale"}
          desc={"Administration page for a yard store"}
          link={"https://epsyloun.github.io/react-shop/"}
          git={"https://github.com/Epsyloun/react-shop"}
        />
        <ProjectSlide
          num="3"
          image={Todo}
          icon={<TaskAltIcon className="slide__icon" />}
          title={"Todo App"}
          link={"https://epsyloun.github.io/todo-machine/"}
          git={"https://github.com/Epsyloun/todo-machine"}
        />
        <ProjectSlide
          num="4"
          image={GifExpert}
          icon={<GifBoxIcon className="slide__icon" />}
          title={"Gif Expert App"}
          desc={"Gif App that brings gif from an API"}
          link={"https://epsyloun.github.io/react-gifexpertapp/"}
          git={"https://github.com/Epsyloun/react-gifexpertapp"}
        />
      </section>
    </>
  );
}

export default ModalProject;
