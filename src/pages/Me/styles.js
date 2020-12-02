import styled from "styled-components";
import { blue, white, coolGray } from "@carbon/colors";

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 2.65rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  color: ${white};
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[60]};
  border-radius: 5px;
  font-weight: bold;
`;

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`;
export const WorkWrapper = styled.div`
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

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
`;

export const WorkTitle = styled.h4`
  font-weight: bold;
`;
