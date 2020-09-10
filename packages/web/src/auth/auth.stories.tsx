import AuthForm from './AuthForm';
import App from '../app/App';
import { toast } from 'react-toastify';

export const AuthScreen = () => (
  <App bgColor='#eff7F9'>
    <AuthForm
      onClick={() => {
        toast('This is Mock Bheaviour');
      }}
    />
  </App>
);

export default { title: 'Auth Screen' };
