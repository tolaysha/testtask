import * as React from 'react';
import ClassNames from 'classnames';
// import injectSheet from 'react-jss'
import { createUseStyles, useTheme } from 'react-jss'
import { useStore } from 'react-redux'
import { addItem } from '../../store/kanban/actions'


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
let Sidebar = ({...props }) => {
  const store = useStore();
  console.log('i am hook-store from sidebar.jsx',store)
  console.log('i am addItem action from sidebar.jsx', addItem)
  console.log('It is items from sidebar.jsx', addItem)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  const handleAddButton = () => store.dispatch(addItem());
  return <div className={ClassNames(classes.root)}>
    <button className={ClassNames(classes.item)}>Четные</button>
    <button className={ClassNames(classes.item)}> Не четные</button>
    <button onClick={handleAddButton} className={ClassNames(classes.item)}> Добавить +1</button>
    <div className={ClassNames(classes.test)}></div>
  </div>

}
export default Sidebar;