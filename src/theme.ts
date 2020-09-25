import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    white: '#FFF',
    black: '#424242',

    background: '#ebebeb',
    border: '#BFBFBF',

    primary: '#6272a4',
    secondary: '#44475a',

    success: '#2AD178',
    warning: '#FABD59',
    danger: '#FF5B68',
  },

  font: {
    family: {
      primary: "'Open Sans', sans-serif",
    },

    weight: {
      regular: 400,
      semiBold: 600,
    },

    color: {
      primary: '#424242',
      secondary: '#969696',
    },
  },

  borderRadius: {
    default: '3px',
  },

  breakpoint: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

export default theme;
