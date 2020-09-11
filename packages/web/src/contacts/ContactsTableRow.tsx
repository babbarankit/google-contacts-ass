import styled from 'styled-components';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import defaultAvatar from '../assets/avatars';
import Avatar from './../components/Avatar';
import { useState } from 'react';
import Checkbox from '../components/Checkbox';
import { trashIcon } from '../assets/trashIcon';
import { toast } from 'react-toastify';

const TD = styled.div<{ md?: number }>`
  flex: 1 0 100%;
  @media screen and (min-width: 450px) {
    flex-basis: ${(props) => (props.md ? props.md * 50 : 1 * 50)}%;
  }
  @media screen and (min-width: 900px) {
    flex: 0 0 33.33%;
  }
`;

const IconLg = styled.span`
  padding-right: 5px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const ContactsTableRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  margin-bottom: 10px;
  border-radius: 8px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(5, 62, 209, 0.14);
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
    border: 1px solid #4eb4ff;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
  }
`;

export interface ContactsTableRowProps {
  name?: string;
  email?: string;
  phoneNo?: string;
  profileSrc?: string;
  isStarred?: boolean;
  id: string;
}

const ContactsTableRow: React.FC<ContactsTableRowProps> = ({
  id,
  name,
  email,
  phoneNo,
  profileSrc = defaultAvatar,
  isStarred,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <ContactsTableRowWrapper
      role='row'
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}>
      <TD md={2} role='cell'>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className='visible-hover'>
            <Checkbox
              hover={hover}
              id={id}
              onClick={(event: any) => {
                if (event.target.checked) {
                  toast('No Behaviour Yet!');
                }
              }}
            />
          </div>
          <div>
            <Avatar size={40} borderSize={1} src={profileSrc} isStarred={isStarred} alt={`${name} Profile Pic`} />
          </div>
          <div style={{ paddingLeft: 10 }}>{name}</div>
        </div>
      </TD>
      <TD role='cell'>
        <IconLg>
          <AiOutlineMail />
        </IconLg>
        {email}
      </TD>
      <TD role='cell'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <IconLg>
              <AiOutlinePhone />
            </IconLg>
            {phoneNo}
          </div>
          <div style={{ marginRight: 25 }}>
            {hover && (
              <button
                style={{ border: 0, background: 'none' }}
                onClick={() => {
                  toast('No Behaviour Yet!');
                }}>
                {trashIcon}
              </button>
            )}
          </div>
        </div>
      </TD>
    </ContactsTableRowWrapper>
  );
};

export default ContactsTableRow;
