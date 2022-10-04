/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  fonts: {
    heading: `'Glegoo', serif`,
    body: `'Roboto', sans-serif`,
  },
};

const textStyles = {
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    padding: [5, 5, 5, 10, 10],
    fontFamily: `'Glegoo', serif`,

  },
  logo: {
    fontFamily: `'Glegoo', serif`,
    fontWeight: 'bold',
  },

  active: {
    textDecoration: 'underline',
  },
};

const layerStyles = {

  inverse: (props) => ({
    bg: mode('background.dark', 'background.light')(props),
  }),
};

const colors = {
  primary: {
    100: '#230063',
    500: '#262626',
  },
  background: {
    light: 'white',
    dark: '#262626',
  },
  text: {
    light: 'white',
    dark: '#262626',
  },

};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('background.light', 'background.dark')(props),
      fontFamily: `'Roboto', sans-serif`,
      color: mode('text.dark', 'text.light')(props),
    },
  }),
};
const theme = extendTheme({
  config, styles, fonts, layerStyles, textStyles, colors,
});

export default theme;
