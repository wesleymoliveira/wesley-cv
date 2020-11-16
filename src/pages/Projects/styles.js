import styled from "styled-components";
import { blue, coolGray } from "@carbon/colors";

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    border-radius: 9px;
    margin: 2rem;
    padding: 2rem;
    border: 1px solid ${coolGray[30]};
  }
`;
export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Mediawrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    flex-direction: column;

    img {
      max-width: 300px;
    }
  }
`;

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
`;

export const ProjectTitle = styled.h4`
  font-weight: bold;
`;

export const SectionTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.65rem;
`;

export const SubTitle = styled.h5`
  font-weight: bold;
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`;

export const TagLang = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[20]};
  color: ${blue[70]};
  border-radius: 5px;
`;
export const TagLib = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[30]};
  color: ${blue[80]};
  border-radius: 5px;
`;
