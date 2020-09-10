import { withApollo } from '../lib/with-apollo';
import OAuth2Callback from '../auth/OAuthCallback';

const OAuth2CallbackPage = withApollo(OAuth2Callback, { ssr: false });
export default OAuth2CallbackPage;
