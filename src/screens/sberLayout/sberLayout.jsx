import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import Paper from '../../components/paper/paper.jsx'


const styles = {
  root: {

  },
}
let SberLayout = ({
  classes,}) => {
  return <div className={ClassNames(classes.root)}>
  </div>
}
export default injectSheet(styles)(SberLayout);
//  export default Kanban;