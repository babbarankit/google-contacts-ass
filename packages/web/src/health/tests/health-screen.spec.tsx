import { MockedProvider } from '@apollo/client/testing';
import { anonymousHealth, HealthScreen } from '../health-screen';
import { render, within, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const message = 'Health Test Success!';

const mocks = [
  {
    request: {
      query: anonymousHealth,
    },
    result: {
      data: {
        anonymousHealth: message,
      },
    },
  },
];

describe('should render health screen', () => {
  it('check-health-status-text', async () => {
    const screen = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HealthScreen />
      </MockedProvider>,
    );

    await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));
    const { getByTestId } = screen;
    const { getByText } = within(getByTestId('health-status'));
    expect(getByText(message)).toBeInTheDocument();
  });
});
