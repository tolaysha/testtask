import * as React from 'react';
import ClassNames from 'classnames';
// import injectSheet from 'react-jss'
import Button from '../ui/button.jsx'
import { createUseStyles, useTheme } from 'react-jss'
import { useDispatch, useSelector } from "react-redux";
import { postItems } from '../../store/kanban/actions'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
//import { addItem } from '../../store/kanban/actions'
let useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },

}))

let Sidebar = ({ ...props }) => {
  const themeContext = useContext(ThemeContext);
  console.log('Current theme: ', themeContext);
  // console.log('i am props from sidebar.jsx', props)
  // console.log('theme2:',theme2());
  // const textColor = theme2('mode', {
  //   light: 'black',
  //   dark: 'white'
  // });
  // using those properties in our component
  //   const Wrapper = styled.div`
  //     color: ${textColor}
  //  `;
  //console.log('1111111Wrapper', Wrapper);

  const dispatch = useDispatch();
  //console.log('i am hook-store from sidebar.jsx',store)
  // console.log('i am addItem action from sidebar.jsx', postItems)
  let count = useSelector(state => state.items.count)
  // console.log('i am count from useSelector im sidebar.jsx',count);
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  const handleAddButton = () => dispatch(postItems(Number(count) + 1));
  return <div className={ClassNames(classes.root)}>
    <Button> Четные </Button>
    <Button> Не четные </Button>
    <Button onClick={handleAddButton} > Добавить +1</Button>
  </div>

}
export default Sidebar;