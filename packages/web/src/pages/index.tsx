import { AuthScreen } from '../auth/AuthScreen';
import { withApollo } from '../lib/with-apollo';

const IndexPage = withApollo(() => <AuthScreen />);
export default IndexPage;
