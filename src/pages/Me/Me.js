import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";

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
    </Layout>
  );
};

export default Me;
