import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'


const styles = {
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
}
let Sidebar = ({ classes }) => {
  return <div className={ClassNames(classes.root)}>
    <button className={ClassNames(classes.item)}> Четные</button>
    <button className={ClassNames(classes.item)}> Не четные</button>
  </div>

}
export default injectSheet(styles)(Sidebar)