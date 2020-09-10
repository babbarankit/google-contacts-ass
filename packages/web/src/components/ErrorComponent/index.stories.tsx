import ErrorComponent from './index';
import StoryApp from '../../app/StoryApp';

export const ErrorScreen = () => {
  return (
    <StoryApp>
      <ErrorComponent message='Mock Went Wrong!' />
    </StoryApp>
  );
};
