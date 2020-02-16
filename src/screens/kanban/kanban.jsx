import { React } from 'react'
import ClassNames from 'classnames';
export const classes = theme => ({
  /* Styles applied to the root element. */
  root: {
    border: '1px solid',
    width: '200px',
    display:'grid',
    justifyContent:'center'
  },

});

const Kanban = ()=>{
  return <div className={ClassNames(classes.root)}>
    hello
  </div>
}
export default Kanban;