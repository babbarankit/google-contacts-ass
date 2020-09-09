import ContactsHeader from './ContactsHeader';
import defaultAvatar from '../assets/avatars';

export const MockHeader = () => (
  <ContactsHeader name='Alex Trust' email='alextrust31@gmail.com' profileSrc={defaultAvatar} />
);

export default { title: 'Contacts Storybook' };
