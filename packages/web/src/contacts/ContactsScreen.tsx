import React from 'react';
import ContactsHeader, { ContactsHeaderProps } from './ContactsHeader';
import Main from '../app/Main';
import App from '../app/App';
import PageHeading from '../components/PageHeading';

export interface ContactsScreenProps {
  header: ContactsHeaderProps;
  noOfContacts: number;
}

const ContactsScreen: React.SFC<ContactsScreenProps> = ({ header: headerProps, noOfContacts }) => {
  return (
    <Main>
      <App bgColor='#fbfdfe'>
        <ContactsHeader {...headerProps} />
        <PageHeading title='Contacts' subTitle={`( ${String(noOfContacts)} )`} />
      </App>
    </Main>
  );
};

export default ContactsScreen;
