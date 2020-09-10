import { useContext } from 'react';
import { ViewerContext, ViewerContainer } from '../auth/ViewerContext';
import { AuthScreen } from '../auth/AuthScreen';
import ContactsScreen from '../contacts/ContactsScreen';
import defaultAvatar from '../assets/avatars';

let sampleContact = {
  id: 'id',
  name: 'Alex Trust',
  email: 'alextrust31@gmail.com',
  phoneNo: '+91-9760689747',
  profileSrc: defaultAvatar,
};

const IndexComponent = () => {
  const { viewerData, onLogin, onLogout } = useContext(ViewerContext);
  if (viewerData.id === 'anonymous') {
    return <AuthScreen onLogin={onLogin} />;
  }
  return <ContactsScreen header={{ ...sampleContact, onLogout }} data={[]} noOfContacts={70} />;
};

const IndexScreen = () => {
  return (
    <ViewerContainer>
      <IndexComponent />
    </ViewerContainer>
  );
};

export default IndexScreen;
