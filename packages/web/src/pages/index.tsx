import { withApollo } from '../lib/with-apollo';
import IndexScreen from '../app/IndexScreen';

const IndexPage = withApollo(IndexScreen);
export default IndexPage;
