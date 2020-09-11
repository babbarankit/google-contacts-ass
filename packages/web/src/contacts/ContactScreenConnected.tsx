import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { getContactRelationshipsConnection } from './graphql';
import {
  GetContactRelationshipsConnection,
  GetContactRelationshipsConnectionVariables,
} from './__generated__/GetContactRelationshipsConnection';
import App from '../app/App';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';
import { ViewerContext } from '../auth/ViewerContext';
import ContactsScreen from './ContactsScreen';

const ContactScreenConnected: React.SFC = () => {
  const { viewerData, onLogout } = useContext(ViewerContext);
  const { loading, error, data } = useQuery<
    GetContactRelationshipsConnection,
    GetContactRelationshipsConnectionVariables
  >(getContactRelationshipsConnection, {
    notifyOnNetworkStatusChange: true,
  });
  if (loading) {
    return (
      <App bgColor='#fbfdfe'>
        <LoadingComponent />
      </App>
    );
  }
  if (error) {
    return (
      <App bgColor='#fbfdfe'>
        <ErrorComponent message={error.message} />
      </App>
    );
  }
  const { total, edges } = data.getContactRelationshipsConnection;
  return (
    <section>
      <ContactsScreen header={{ ...viewerData, onLogout }} data={edges} noOfContacts={total} />
    </section>
  );
};

export default ContactScreenConnected;
