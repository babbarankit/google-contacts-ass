import React from 'react';
import { render, act } from '../../testUtils';

import Main from '../main';
const Screen = () => (
  <Main>
    <p>Screen Text</p>
  </Main>
);

describe('main render screen', () => {
  it('renders screen', () => {
    const { getByText } = render(<Screen />);
    expect(getByText('Screen Text')).toBeInTheDocument();
  });

  it('health screen macthes snapshot', async () => {
    await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));
    const { container } = render(<Screen />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
