import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

/**
 * Lightweight theme wrapper that mirrors the docs template's AppTheme.
 * We use the project `src/theme.js` and provide a ThemeProvider for children.
 */
function AppTheme(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node,
};

export default AppTheme;
