import ContactsHeader from './ContactsHeader';
import defaultAvatar from '../assets/avatars';
import ContactsScreen from './ContactsScreen';
import $ContactsTableHeaderRow from './ContactsTableHeaderRow';
import ContactsTableRow from './ContactsTableRow';
import StoryApp from '../app/StoryApp';

export const MockHeader = () => (
  <ContactsHeader name='Alex Trust' email='alextrust31@gmail.com' profileSrc={defaultAvatar} />
);

export const MockContactsScreen = () => (
  <ContactsScreen
    header={{ name: 'Alex Trust', email: 'alextrust31@gmail.com', profileSrc: defaultAvatar }}
    noOfContacts={170}
  />
);

export const MockContactsRow = () => (
  <StoryApp>
    <div style={{ margin: 20, width: '100%' }}>
      <ContactsTableRow id='a1' name='Alex Trust' email='alextrust31@gmail.com' phoneNo='+91-9760689747' />
      <ContactsTableRow id='a2' name='Alex Trust 2' email='alextrust31@gmail.com' phoneNo='+91-9760689747' isStarred />
    </div>
  </StoryApp>
);

export const ContactsTableHeaderRow = () => <$ContactsTableHeaderRow />;

export default { title: 'Contacts Storybook' };
