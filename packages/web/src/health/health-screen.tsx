import { gql, useQuery } from '@apollo/client';

export const anonymousHealth = gql`
  query AnonymousHealth {
    anonymousHealth
  }
`;

const HealthScren = () => {
  const { loading, error, data } = useQuery(anonymousHealth);

  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <p data-test-id='health-status'>{data.anonymousHealth}</p>
    </section>
  );
}

export default HealthScren;
