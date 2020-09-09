import React from 'react';
import ContactsHeader, { ContactsHeaderProps } from './ContactsHeader';
import Main from '../app/Main';
import App from '../app/App';
import PageHeading from '../components/PageHeading';
import ContactsTableRow, { ContactsTableRowProps } from './ContactsTableRow';
import styled from 'styled-components';
import ContactsTableHeaderRow from './ContactsTableHeaderRow';

export interface ContactsScreenProps {
  header: ContactsHeaderProps;
  noOfContacts: number;
  data: ContactsTableRowProps[];
}

const TableWrapper = styled.div`
  @media screen and (min-width: 450px) {
    margin: 0px 175px;
  }
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    left: -100px;
    width: 5px;
    background: #f4f7ff;
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #053ed1;
    border-radius: 4px;
    height: 8px;
  }
`;

const ContactsScreen: React.SFC<ContactsScreenProps> = ({ header: headerProps, noOfContacts, data = [] }) => {
  return (
    <Main>
      <App bgColor='#fbfdfe'>
        <ContactsHeader {...headerProps} />
        <PageHeading title='Contacts' subTitle={`( ${String(noOfContacts)} )`} />
        <TableWrapper>
          <ContactsTableHeaderRow />
          {data.map((row) => (
            <ContactsTableRow key={row.id} {...row} />
          ))}
        </TableWrapper>
      </App>
    </Main>
  );
};

export default ContactsScreen;
