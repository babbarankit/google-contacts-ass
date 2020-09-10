import { withApollo } from '../lib/with-apollo';
import OAuth2Callback from '../auth/OAuthCallback';

const OAuth2CallbackPage = withApollo(OAuth2Callback);
export default OAuth2CallbackPage;
