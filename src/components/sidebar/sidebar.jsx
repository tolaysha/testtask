import * as React from 'react';
import ClassNames from 'classnames';
// import injectSheet from 'react-jss'
import { createUseStyles, useTheme } from 'react-jss'
import { useDispatch, useSelector } from "react-redux";
import { postItems } from '../../store/kanban/actions'
//import { addItem } from '../../store/kanban/actions'
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
  console.log('i am props from sidebar.jsx', props)
  const dispatch = useDispatch();
  //console.log('i am hook-store from sidebar.jsx',store)
  console.log('i am addItem action from sidebar.jsx', postItems)
  let count = useSelector(state => state.items.count)
  console.log('i am count from useSelector im sidebar.jsx',count);
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  const handleAddButton = () => dispatch(postItems(Number(count) + 1));
  return <div className={ClassNames(classes.root)}>
    <button className={ClassNames(classes.item)}>Четные</button>
    <button className={ClassNames(classes.item)}> Не четные</button>
    <button onClick={handleAddButton} className={ClassNames(classes.item)}> Добавить +1</button>
    <div className={ClassNames(classes.test)}></div>
  </div>

}
export default Sidebar;