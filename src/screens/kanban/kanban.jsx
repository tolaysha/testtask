import React, { useEffect } from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import Paper from '../../components/paper/paper.jsx'
import { useRouteMatch, } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getItems } from '../../store/kanban/actions.js'
const styles = {
  root: {

  },
}

let Kanban = ({
  classes,
  ...other }) => {

  let match = useRouteMatch();
  const dispatch = useDispatch();
  console.log('i am math from hook useRouterMath from kanban.jsx', match);
  //const [Items, setItems] = useState();
  useEffect((state) => {
    console.log('i am state from useEffect-', state);
    //getItems(Number(match.params.id));
    console.log('i am dispatch in useEffect in kanban.jsx', dispatch);
    console.log('i am getItems in useEffect in kanban.jsx', getItems);
    dispatch(getItems(Number(match.params.id)))
  }, [match.params.id]);

  console.log('console check __filename from Kanban.jsx', __filename);
  console.log('console check other from Kanban.jsx', other);
  return <div className={ClassNames(classes.root)}>
    <Paper />
  </div>
}
export default injectSheet(styles)(Kanban);
//  export default Kanban;