import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Main from '../app/Main';

export const anonymousHealth = gql`
  query AnonymousHealth {
    anonymousHealth
  }
`;

const Section = styled.section`
  background: ${(props) => props.theme.colors.warning};
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const HealthScreen = () => {
  const { loading, error, data } = useQuery(anonymousHealth);

  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <Section>
        <h1 data-testid='health-status'>{data.anonymousHealth}</h1>
      </Section>
    </Main>
  );
};
