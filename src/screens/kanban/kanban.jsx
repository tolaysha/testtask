import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import Paper from '../../components/paper/paper.jsx'


const styles = {
  root: {

  },
}
let Kanban = ({
  classes,
  items }) => {
  let props = {
    items:items,
  }
  console.log('console check from Kanban.jsx', items);
  return <div className={ClassNames(classes.root)}>
    <Paper {...props} />
  </div>
}



export default injectSheet(styles)(Kanban);
//  export default Kanban;