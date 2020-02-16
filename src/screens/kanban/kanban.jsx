import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import Paper from '../../components/paper/paper.jsx'


const styles = {
  root: {

  },
}
let Kanban = ({classes})=>{
  return <div className={ClassNames(classes.root)}>
    <Paper />
  </div>
}
export default injectSheet(styles)(Kanban)