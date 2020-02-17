import * as React from 'react';
import ClassNames from 'classnames';
// import injectSheet from 'react-jss'
import {createUseStyles, useTheme} from 'react-jss'
import styled from 'styled-components';
const Heading = styled.h1`
  color: gray;
  font-size: 1.5em;
`;
const Paragraph = styled.p`
  font-size: 1.1em;
`;

let useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  item: {
    margin: '5px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'darkblue',
    },
    minHeight: '35px',
    boxShadow: `-webkit-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
    -moz-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
    box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);`,

  },
}))
let Sidebar = ({ ...props }) => {
  const theme = useTheme()
  const classes = useStyles({...props, theme})
  return <div className={ClassNames(classes.root)}>
    <button className={ClassNames(classes.item)}> Четные</button>
    <button className={ClassNames(classes.item)}> Не четные</button>
    <div className={ClassNames(classes.test)}></div>
  </div>

}
export default Sidebar;