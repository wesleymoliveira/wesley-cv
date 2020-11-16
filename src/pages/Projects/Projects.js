import React from "react";
import Layout from "../../components/Layout";
import { LogoGithub32, View32 } from "@carbon/icons-react";
import ReactTooltip from "react-tooltip";

import {
  ProjectWrapper,
  Mediawrapper,
  MainInfoWrapper,
  ProjectItem,
  ProjectTitle,
  SectionTitle,
  SubTitle,
  SkillContainer,
  TagLang,
  TagLib,
} from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <SectionTitle>Recent Projects</SectionTitle>
      <ProjectWrapper>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <MainInfoWrapper>
                <ProjectTitle>{project.name}</ProjectTitle>
                {project.primaryLanguage}
              </MainInfoWrapper>
              <Mediawrapper>
                {project.images.map((it) => (
                  <img src={it.resolutions.mobile.url} alt="Project" />
                ))}
              </Mediawrapper>
              <p>{project.summary}</p>
              <br />
              <ReactTooltip id="liveTip" place="left" effect="solid">
                Live Demo
              </ReactTooltip>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <View32 aria-hidden={true} data-tip data-for="liveTip" />
              </a>
              <ReactTooltip id="gitTip" place="right" effect="solid">
                GitHub Repo
              </ReactTooltip>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGithub32 aria-hidden={true} data-tip data-for="gitTip" />
              </a>

              <SkillContainer>
                <SubTitle>Languages</SubTitle>
                {project.languages.map((item, j) => (
                  <TagLang key={j}>{item}</TagLang>
                ))}
                <br />
                <SubTitle>Libs</SubTitle>
                {project.libraries.map((item, k) => (
                  <TagLib key={k}>{item}</TagLib>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </ProjectWrapper>
    </Layout>
  );
};

export default Projects;
