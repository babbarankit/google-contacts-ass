import React, { useContext } from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
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
  const { error, data, fetchMore, networkStatus } = useQuery<
    GetContactRelationshipsConnection,
    GetContactRelationshipsConnectionVariables
  >(getContactRelationshipsConnection, {
    notifyOnNetworkStatusChange: true,
  });
  if (networkStatus === NetworkStatus.loading) {
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
  const { total, edges, cursor } = data.data;
  return (
    <section>
      <ContactsScreen
        header={{ ...viewerData, onLogout }}
        data={edges}
        noOfContacts={total}
        hasMore={!!cursor}
        onLoadMore={async () => {
          if (networkStatus !== NetworkStatus.fetchMore && cursor) {
            await fetchMore({
              updateQuery: (previousResult: any, { fetchMoreResult }) => {
                return {
                  data: {
                    ...fetchMoreResult.data,
                    edges: [...previousResult.data.edges, ...fetchMoreResult.data.edges],
                  },
                };
              },
              variables: {
                cursor,
              },
            });
          }
        }}
      />
    </section>
  );
};

export default ContactScreenConnected;
