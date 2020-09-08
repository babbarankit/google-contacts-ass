import { withApollo } from "../lib/with-apollo";
import HealthScren from "../health/health-screen";

const HealthPage = withApollo(HealthScren);

export default HealthPage;
