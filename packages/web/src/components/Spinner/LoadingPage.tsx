import { spinning } from './SpinnerBrand';
import { Box } from 'grommet/components/Box';

export const LoadingPage = () => (
  <Box align='center' justify='center' fill='vertical'>
    {spinning}
  </Box>
);
