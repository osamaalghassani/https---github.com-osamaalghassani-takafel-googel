import PropTypes from 'prop-types';
import { useMemo } from 'react';


// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
//
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
const isRTL=true;

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      direction: isRTL ? 'rtl' : 'ltr'

    }),
    []
  );
  const cacheRtl = createCache({
    key: isRTL ? 'muirtl' : 'muiltr',
    stylisPlugins: isRTL ? [rtlPlugin] : [],
  });
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
    <CacheProvider value={cacheRtl}>

      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}
