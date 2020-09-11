import React from 'react';
import styled from 'styled-components';
import Avatar from './../components/Avatar';
import logoutIcon from '../assets/LogoutIcon';
import { renderToStaticMarkup } from 'react-dom/server';
import HeaderBg from './HeaderBg';

export const LogoutButton: React.SFC<{ onClick: () => void }> = ({ onClick }) => (
  <button style={{ border: 0, background: 'none', cursor: 'pointer' }} onClick={onClick}>
    {logoutIcon}
  </button>
);

export interface ContactsHeaderLeftProps {
  name: string;
  email: string;
  profileSrc: string;
}

const ContactsHeaderLeftWrapper = styled.div`
  padding-left: 60px;
  display: flex;
  align-items: center;
`;

const ContactsHeaderLeft: React.SFC<ContactsHeaderLeftProps> = ({ name, email, profileSrc }) => {
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
export interface ContactsHeaderRightProps {
  onLogout: () => void;
}
const ContactsHeaderRight: React.SFC<ContactsHeaderRightProps> = ({ onLogout }) => {
  return (
    <div style={{ paddingRight: 80, zIndex: 10 }}>
      <LogoutButton onClick={onLogout} />
    </div>
  );
};

const ContactsHeaderBox = styled.div<{ bgImgSrc: string }>`
  display: flex;
  font-weight: 500;
  font-size: 12px;
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
export type ContactsHeaderProps = ContactsHeaderLeftProps & ContactsHeaderRightProps;
const ContactsHeader: React.SFC<ContactsHeaderProps> = ({ onLogout, ...rest }) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<HeaderBg />));
  const bgImgSrc = `url("data:image/svg+xml,${svgString}")`;
  return (
    <ContactsHeaderBox bgImgSrc={bgImgSrc}>
      <ContactsHeaderBox2 bgImgSrc={bgImgSrc}>
        <ContactsHeaderLeft {...rest} />
        <ContactsHeaderRight onLogout={onLogout} />
      </ContactsHeaderBox2>
    </ContactsHeaderBox>
  );
};

export default ContactsHeader;
