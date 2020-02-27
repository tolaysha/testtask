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
  items,
  ...other }) => {
  let props = {
    items:items,
  }
  console.log('console check items from Kanban.jsx', items);
  console.log('console check __filename from Kanban.jsx', __filename);
  console.log('console check other from Kanban.jsx', other);
  return <div className={ClassNames(classes.root)}>
    <Paper {...props} />
  </div>
}
export default injectSheet(styles)(Kanban);
//  export default Kanban;