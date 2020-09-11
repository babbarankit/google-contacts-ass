import styled from 'styled-components';

const TH = styled.div`
  flex: 1;
  flex-basis: 100%;
  font-size: 12px;
  color: #b0c6ff;
`;

const ContactsTableHeaderRowWrapper = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    padding-left: 46px;
    flex-basis: 33.3%;
    flex: 1;
    display: flex;
    margin-bottom: 10px;
  }
`;

const ContactsTableHeaderRow = () => (
  <ContactsTableHeaderRowWrapper role='row'>
    <TH role='cell'>NAME</TH>
    <TH role='cell'>EMAIL</TH>
    <TH role='cell'>PHONE NUMBER</TH>
  </ContactsTableHeaderRowWrapper>
);

export default ContactsTableHeaderRow;
