import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import {
  HeaderContainer,
  Header,
  Image,
  CallToActionCV,
  CallToActionGithub,
  CallToActionLinkedIn,
} from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>{user.basics.label}</h4>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.headline}</p>
        </div>
      </Header>
      <div>
        <CallToActionCV
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View / Save PDF</span>
          <ArrowRight16 />
        </CallToActionCV>

        <CallToActionGithub
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>My GitHub</span>
          <ArrowRight16 />
        </CallToActionGithub>

        <CallToActionLinkedIn
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>My LinkedIn</span>
          <ArrowRight16 />
        </CallToActionLinkedIn>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
