import React from "react";
import me_large from "@images/Rodrigo.jpeg";
import LanguageIcon from "@mui/icons-material/Language";
import PaletteIcon from "@mui/icons-material/Palette";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import web_projects from "@images/web-projects.png";
import ProjectCard from "../components/ProjectCard";
import TitleSection from "../components/TitleSection";

function Projects() {
  const largeIcon = { fontSize: "3em", textAlign: "center" };
  return (
    <section id="Projects" className="projects">
      <TitleSection title="Projects" subtitle="Types of projects" wavesFlag={true}/>
      <ProjectCard
        category={"Web"}
        img={web_projects}
        icon={<LanguageIcon sx={largeIcon} />}
        description={
          "View all the information about my projects using Html Css, Sass JavaScript React etc"
        }
      />
      <ProjectCard
        category={"Design"}
        img={web_projects}
        icon={<PaletteIcon sx={largeIcon} />}
        description={
          "View all the information about my projects using Figma"
        }
      />
      <ProjectCard
        category={"Mobile"}
        img={web_projects}
        icon={<PhoneAndroidIcon sx={largeIcon} />}
        description={
          "View all the information about my projects using Flutter"
        }
      />
    </section>
  );
}

export default Projects;
