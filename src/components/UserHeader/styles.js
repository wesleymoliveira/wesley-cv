import styled from "styled-components";
import { blue } from "@carbon/colors";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? "none" : "flex")};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`;

export const CallToActionCV = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #ff0000;
  background-color: rgba(46, 49, 49, 1);
  transition: background-color 250ms ease;

  &:hover {
    background-color: #ff0000;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;

export const CallToActionGithub = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid rgba(46, 204, 64, 0.3);
  background-color: #2ecc40;
  transition: background-color 250ms ease;

  &:hover {
    background-color: rgba(46, 204, 64, 0.3);
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;

export const CallToActionLinkedIn = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid ${blue[30]};
  background-color: ${blue[60]};
  transition: background-color 250ms ease;

  &:hover {
    background-color: ${blue[40]};
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;
