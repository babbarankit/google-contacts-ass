export default { title: 'Spinners and Loaders' };
import { StoryApp } from '../../app/StoryApp';
import { LoadingPage as $LoadingPage } from './LoadingPage';

export const LoadingPage = () => (
  <StoryApp>
    <$LoadingPage />
  </StoryApp>
);
