import React from 'react';
import ContactsHeader, { ContactsHeaderProps } from './ContactsHeader';
import App from '../app/App';
import PageHeading from '../components/PageHeading';
import ContactsTableRow, { ContactsTableRowProps } from './ContactsTableRow';
import styled from 'styled-components';
import ContactsTableHeaderRow from './ContactsTableHeaderRow';
import useInfiniteScroll from 'react-infinite-scroll-hook';

export interface ContactsScreenProps {
  header: ContactsHeaderProps;
  noOfContacts: number;
  data: ContactsTableRowProps[];
  hasMore: boolean;
  onLoadMore: () => Promise<void>;
}

const TableWrapper = styled.div`
  @media screen and (min-width: 450px) {
    margin: 0px 175px;
  }
  height: 100%;
  overflow-y: auto;
  scroll-margin: 50px 0 0 50px;
  padding-right: 12px;
  &::-webkit-scrollbar {
    display: block;
    left: 0px;
    width: 5px;
    background: #f4f7ff;
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #053ed1;
    border-radius: 4px;
    height: 8px;
  }
`;

const ContactsScreen: React.SFC<ContactsScreenProps> = ({
  header: headerProps,
  noOfContacts,
  data = [],
  hasMore,
  onLoadMore,
}) => {
  const [loading, setLoading] = React.useState(false);
  const infiniteRef = useInfiniteScroll<HTMLDivElement>({
    loading,
    hasNextPage: hasMore,
    onLoadMore: async () => {
      setLoading(true);
      await onLoadMore();
      setLoading(false);
    },
    scrollContainer: 'parent',
  });
  return (
    <App bgColor='#fbfdfe'>
      <ContactsHeader {...headerProps} />
      <PageHeading title='Contacts' subTitle={`( ${String(noOfContacts)} )`} />
      <TableWrapper>
        <div ref={infiniteRef}>
          <ContactsTableHeaderRow />
          {data.map((row) => (
            <ContactsTableRow key={row.id} {...row} />
          ))}
        </div>
      </TableWrapper>
    </App>
  );
};

export default ContactsScreen;
