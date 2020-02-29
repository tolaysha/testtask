import React, { useEffect } from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import Paper from '../../components/paper/paper.jsx'
import { useParams, } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getItems } from '../../store/kanban/actions.js'
const styles = {
  root: {

  },
}

let Kanban = ({
  classes,
  ...other }) => {

  let params = useParams();
  const dispatch = useDispatch();
  console.log('i am params from hook useRouterMath from kanban.jsx', params);
  //const [Items, setItems] = useState();
  useEffect((state) => {
    //console.log('i am state from useEffect-', state);
    //console.log('i am dispatch in useEffect in kanban.jsx', dispatch);
    //console.log('i am getItems in useEffect in kanban.jsx', getItems);
    dispatch(getItems(Number(params.id)))
  }, [params.id]);

  console.log('console check __filename from Kanban.jsx', __filename);
  console.log('console check other from Kanban.jsx', other);
  return <div className={ClassNames(classes.root)}>
    <Paper />
  </div>
}
export default injectSheet(styles)(Kanban);