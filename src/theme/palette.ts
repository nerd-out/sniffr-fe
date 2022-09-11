import {
  errorContrast,
  errorDark,
  errorLight,
  errorMain,
  infoContrast,
  infoDark,
  infoLight,
  infoMain,
  primaryContrast,
  primaryDark,
  primaryLight,
  primaryMain,
  secondaryContrast,
  secondaryDark,
  secondaryLight,
  secondaryMain,
  successContrast,
  successDark,
  successLight,
  successMain,
  warningContrast,
  warningDark,
  warningLight,
  warningMain
} from './custom';

const palette = {
  primary: {
    main: primaryMain,
    light: primaryLight,
    dark: primaryDark,
    contrast: primaryContrast
  },
  secondary: {
    main: secondaryMain,
    light: secondaryLight,
    dark: secondaryDark,
    contrast: secondaryContrast
  },
  error: {
    main: errorMain,
    light: errorLight,
    dark: errorDark,
    contrast: errorContrast
  },
  warning: {
    main: warningMain,
    light: warningLight,
    dark: warningDark,
    contrast: warningContrast
  },
  info: {
    main: infoMain,
    light: infoLight,
    dark: infoDark,
    contrast: infoContrast
  },
  success: {
    main: successMain,
    light: successLight,
    dark: successDark,
    contrast: successContrast
  }
};

export default palette;
