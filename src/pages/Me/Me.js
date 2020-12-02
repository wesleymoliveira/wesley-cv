import React from "react";
import Layout from "../../components/Layout";
import {
  SectionTitle,
  Paragraph,
  Pill,
  WorkWrapper,
  WorkItem,
  WorkTitle,
  MainInfoWrapper,
} from "./styles";
import { View32 } from "@carbon/icons-react";
import ReactTooltip from "react-tooltip";

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>

      <SectionTitle>Work</SectionTitle>
      <WorkWrapper>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <MainInfoWrapper>
                <WorkTitle>{work.position}</WorkTitle>
                {work.startDate} until {work.endDate}
                <WorkTitle>{work.company}</WorkTitle>
              </MainInfoWrapper>
              <p>{work.summary}</p>
              <br />
              <ReactTooltip id="liveTip" place="left" effect="solid">
                Company Website
              </ReactTooltip>
              <a href={work.website} target="_blank" rel="noopener noreferrer">
                <View32 aria-hidden={true} data-tip data-for="liveTip" />
              </a>
            </WorkItem>
          ))}
        </ul>
      </WorkWrapper>
    </Layout>
  );
};

export default Me;
