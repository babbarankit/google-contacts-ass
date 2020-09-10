import React, { useEffect } from 'react';
import { GetViewer } from './__generated__/GetViewer';
import { useQuery, useMutation } from '@apollo/client';
import { getViewer, logout } from './graphql';
import { toast } from 'react-toastify';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';

export interface ViewerContextValues {
  viewerData: Pick<GetViewer['getViewer'], Exclude<keyof GetViewer['getViewer'], '__typename'>>;
  onLogin: () => void;
  onLogout: () => void;
}

export type ViewerData = ViewerContextValues['viewerData'];

const anonymousViewerData: ViewerData = {
  id: 'anonymous',
  name: undefined,
  email: undefined,
  phoneNo: undefined,
  profileSrc: undefined,
};

export const ViewerContext = React.createContext<ViewerContextValues>({
  viewerData: anonymousViewerData,
  onLogin: () => {},
  onLogout: () => {},
});

export const ViewerContainer: React.FC = ({ children }) => {
  const { loading, error, data, refetch } = useQuery(getViewer);
  const [onLogout] = useMutation(logout, {
    onCompleted: () => {
      window.localStorage.setItem('logout', `${Date.now()}`);
      refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  // Define an Effect to logout in all tabs
  useEffect(() => {
    window.addEventListener('storage', () => {});
    return () => {
      window.localStorage.removeItem('logout');
    };
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }
  if (error) {
    return <ErrorComponent message={error.message} />;
  }
  return (
    <ViewerContext.Provider
      value={{
        viewerData: data.getViewer,
        onLogin: () => refetch(),
        onLogout: () => {
          onLogout();
          toast('Logged Out!');
        },
      }}>
      {children}
    </ViewerContext.Provider>
  );
};
