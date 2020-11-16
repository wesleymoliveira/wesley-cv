import styled from "styled-components";
import {
  SideNav,
  SideNavItems,
} from "carbon-components-react/lib/components/UIShell";

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
  svg {
    fill: #b7b7b7 !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
`;

export const CustomSideNavItems = styled(SideNavItems)`
  width: auto !important;
  height: 5rem !important;
  &:hover {
    width: auto !important;
    height: 5rem !important;
  }
`;
