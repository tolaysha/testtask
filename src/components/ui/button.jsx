import styled from 'styled-components';
// import theme from '../../assets/theme/theme.jsx';
// import colors from '../../assets/theme/colors.jsx';

// const buttonBackgroundColor = theme.variants('mode', 'kind', {
//   primary: { light: colors.blueLight, dark: colors.blueDark },
//   success: { light: colors.greenLight, dark: colors.greenDark, },
//   warning: { light: colors.yellowLight, dark: colors.yellowDark, },
//   danger: { light: colors.redLight, dark: colors.redDark, },
// });

// const buttonColor = theme.variants('mode', 'kind', {
//   default: { light: colors.grayDarker, dark: colors.grayLighter },
//   primary: { light: colors.blueDark, dark: colors.blueLight },
//   success: { light: colors.greenDark, dark: colors.greenLight },
//   warning: { light: colors.yellowDark, dark: colors.yellowLight },
//   danger: { light: colors.redDark, dark: colors.redLight },
// });

const Button = styled.button`
  font: inherit;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.25em;
  margin-right: 0.5em;
  cursor: pointer;
  color: white;
  cursor: pointer;
  margin: 5px;
  box-shadow: -webkit-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
  -moz-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
  box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
  min-height: 35px;
  border-radius: 5px;
  background-color: blue;
  :hover: {
    background-color: 'darkblue',
  },
`;

Button.defaultProps = {
  kind: 'default',
};

export default Button;