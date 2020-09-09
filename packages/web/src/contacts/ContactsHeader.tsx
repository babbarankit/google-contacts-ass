import React from 'react';
import styled from 'styled-components';
import Avatar from './../components/Avatar';
import logoutIcon from '../assets/LogoutIcon';
import { renderToStaticMarkup } from 'react-dom/server';
import HeaderBg from './HeaderBg';

export const LogoutButton = () => <button style={{ border: 0, background: 'none' }}>{logoutIcon}</button>;

export interface ContactsHeaderProps {
  name: string;
  email: string;
  profileSrc: string;
}

const ContactsHeaderLeftWrapper = styled.div`
  padding-left: 60px;
  display: flex;
  align-items: center;
`;

const ContactsHeaderLeft: React.SFC<ContactsHeaderProps> = ({ name, email, profileSrc }) => {
  return (
    <ContactsHeaderLeftWrapper>
      <Avatar size={54} src={profileSrc} borderSize={2} />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 14 }}>
        <div>
          <span style={{ fontSize: 18 }}>{name}</span>
        </div>
        <div>
          <span>{email}</span>
        </div>
      </div>
    </ContactsHeaderLeftWrapper>
  );
};

const ContactsHeaderRight: React.SFC = () => {
  return (
    <div style={{ paddingRight: 80 }}>
      <LogoutButton />
    </div>
  );
};

const ContactsHeaderBox = styled.div<{ bgImgSrc: string }>`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90.21deg, #053ed1 0%, #0f4eac 100%);
  &:before {
    width: 250px;
    height: 150px;
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    background: ${(props) => props.bgImgSrc} 0 0 no-repeat;
    transform: rotate(-2.13deg);
  }
`;

const ContactsHeaderBox2 = styled.div<{ bgImgSrc: string }>`
  display: flex;

  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  position: relative;
  overflow: hidden;
  &:after {
    width: 210px;
    height: 150px;
    content: ' ';
    position: absolute;
    bottom: -70px;
    right: -30px;
    background: ${(props) => props.bgImgSrc} 0 0 no-repeat;
    transform: rotate(-2.13deg);
  }
`;

const ContactsHeader: React.SFC<ContactsHeaderProps> = (props) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<HeaderBg />));
  const bgImgSrc = `url("data:image/svg+xml,${svgString}")`;
  return (
    <ContactsHeaderBox bgImgSrc={bgImgSrc}>
      <ContactsHeaderBox2 bgImgSrc={bgImgSrc}>
        <ContactsHeaderLeft {...props} />
        <ContactsHeaderRight />
      </ContactsHeaderBox2>
    </ContactsHeaderBox>
  );
};

export default ContactsHeader;
