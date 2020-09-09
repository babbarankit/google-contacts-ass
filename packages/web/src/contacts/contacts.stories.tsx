import ContactsHeader from './ContactsHeader';
import defaultAvatar from '../assets/avatars';
import ContactsScreen from './ContactsScreen';

export const MockHeader = () => (
  <ContactsHeader name='Alex Trust' email='alextrust31@gmail.com' profileSrc={defaultAvatar} />
);

export const MockContactsScreen = () => (
  <ContactsScreen
    header={{ name: 'Alex Trust', email: 'alextrust31@gmail.com', profileSrc: defaultAvatar }}
    noOfContacts={170}
  />
);

export default { title: 'Contacts Storybook' };
