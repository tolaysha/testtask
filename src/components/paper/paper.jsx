import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import { useDispatch, useSelector } from "react-redux";


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '5px',
  },
  item: {
    border: '1px solid pink',
    minWidth: '150px',
    minHeight: '150px',
    lineHeight: '150px',
    margin: '5px',
    fontSize: '56px',
    color: 'darkblue',
    backgroundColor: '#e7a61a',
    transition: '0.15s ease',
    '&:hover': {
      backgroundColor: '#b9923e',
      cursor: 'pointer',
      transform: 'scale(1.1)',
    },

    boxShadow: `-webkit-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
    -moz-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
    box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);`,
    borderRadius: `border-radius: 19px 19px 19px 19px;
    -moz-border-radius: 19px 19px 19px 19px;
    -webkit-border-radius: 19px 19px 19px 19px;
    border: 0px solid #000000;`
  },
}
let Paper = ({ classes, component }) => {
  const count = useSelector(state => state.items.count)
  console.log('i am count from useSelector im paper.jsx',count);
  
  return (<div className={ClassNames(classes.root)}>
    {[...Array(count)].map((_, index) => <div key={index} className={ClassNames(classes.item)}>
      {index}
    </div>)}
  </div>)

}
export default injectSheet(styles)(Paper)