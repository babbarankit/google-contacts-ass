import Button from './index';
import StoryApp from '../../app/StoryApp';
import { toast } from 'react-toastify';

export const SignButton = () => {
  return (
    <StoryApp>
      <Button
        onClick={() => {
          toast('Mock Behaviour!');
        }}>
        Sign In
      </Button>
    </StoryApp>
  );
};
