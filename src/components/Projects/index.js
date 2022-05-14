import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectsData from "../../ProjectsData";
import LazyLoad from "react-lazyload";

import {
  Container,
  InnerContainer,
  Header,
  CardSection,
  ProjectHolder,
} from "./ProjectsElements";

const Projects = ({ close }) => {
  const [temp, setTemp] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView && temp) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      setTemp(false);
    }
    if (!inView && temp) {
      animation.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView, animation, temp]);

  return (
    <Container id="projects" close={close} ref={ref}>
      <InnerContainer>
        <Header animate={animation}>Featured Projects</Header>
        <CardSection animate={animation}>
          {projectsData.map((projectData) => (
            <ProjectHolder key={projectData.id}>
              {projectData.imageUrl && (
                <LazyLoad offset={100} style={{display:"flex", justifyContent:"center"}}>
                  <img src={projectData?.imageUrl} alt="project" style={{width:"20%", height:"auto", paddingTop:"4rem"}}/>
                </LazyLoad>
              )}
              <h1>{projectData.name}</h1>
              <p>{projectData.desc}</p>
              <div className="tech-holder">
                {projectData.techs.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </ProjectHolder>
          ))}
        </CardSection>
      </InnerContainer>
    </Container>
  );
};

export default Projects;
