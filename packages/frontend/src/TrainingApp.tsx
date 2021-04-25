/* eslint-disable react/no-children-prop */
import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Router } from './router/Router';
import Navigation from './components';

const theme = createMuiTheme({
  palette: {
    warning: {
      main: orange[500],
    },
  },
});

const AppThemeProvider: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme} children={children} />
);

// Create a client
const queryClient = new QueryClient();

export const TrainingApp: React.FC = () => (
  <AppThemeProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AppThemeProvider>
);

export default TrainingApp;
