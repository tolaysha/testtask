import React, { useEffect } from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import Paper from '../../components/paper/paper.jsx'
import {useRouteMatch,} from "react-router-dom";

const styles = {
  root: {

  },
}

let Kanban = ({
  classes,
  items,
  getItems,
  ...other }) => {
  let props = {
    items:items,
  }
  let match = useRouteMatch();
  console.log('i am math from hook useRouterMath from kanban.jsx',match);
  //const [Items, setItems] = useState();
  useEffect((state) => {
    console.log('i am state from useEffect-', state);
    getItems(+match.params.id);
  
  }, [match.params.id]);
   
  console.log('console check __filename from Kanban.jsx', __filename);
  console.log('console check other from Kanban.jsx', other);
  return <div className={ClassNames(classes.root)}>
    <Paper {...props} />
  </div>
}
export default injectSheet(styles)(Kanban);
//  export default Kanban;