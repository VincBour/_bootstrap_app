/* eslint-disable react/no-children-prop */
import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';
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

export const TrainingApp: React.FC = () => (
  <AppThemeProvider>
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  </AppThemeProvider>
);

export default TrainingApp;
