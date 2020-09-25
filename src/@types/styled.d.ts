import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;

      background: string;
      border: string;

      primary: string;
      secondary: string;

      success: string;
      warning: string;
      danger: string;
    };

    font: {
      family: {
        primary: string;
      };

      weight: {
        regular: number;
        semiBold: number;
      };

      color: {
        primary: string;
        secondary: string;
      };
    };

    borderRadius: {
      default: string;
    };

    breakpoint: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
