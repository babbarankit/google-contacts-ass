import { useContext } from 'react';
import { ViewerContext, ViewerContainer } from '../auth/ViewerContext';
import { AuthScreen } from '../auth/AuthScreen';
import ContactScreen from '../contacts/ContactScreenConnected';

const IndexComponent = () => {
  const { viewerData, onLogin } = useContext(ViewerContext);
  if (viewerData.id === 'anonymous') {
    return <AuthScreen onLogin={onLogin} />;
  }
  return <ContactScreen />;
};

const IndexScreen = () => {
  return (
    <ViewerContainer>
      <IndexComponent />
    </ViewerContainer>
  );
};

export default IndexScreen;
