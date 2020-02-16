import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'


const styles = {
  root: {
    display: 'flex',
    border: '1px solid red',
    flexDirection:'row',
    flexWrap: 'wrap',
    padding:'5px',
  },
  item: {
    border: '1px solid pink',
    minWidth:'150px',
    minHeight:'150px',
    lineHeight: '150px',
    margin: '5px',
    fontSize: '56px',
    color: 'darkblue',
    backgroundColor:'#e7a61a',
    
    boxShadow:`-webkit-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
    -moz-box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);
    box-shadow: 0px 0px 47px -27px rgba(0,0,0,0.72);`,
    borderRadius:`border-radius: 19px 19px 19px 19px;
    -moz-border-radius: 19px 19px 19px 19px;
    -webkit-border-radius: 19px 19px 19px 19px;
    border: 0px solid #000000;`
  },
}
let Paper = ({ classes }) => {
  return (<div className={ClassNames(classes.root)}>
    {[...Array(10)].map((_,index)=><div className={ClassNames(classes.item)}>
      {index}
    </div>)}
  </div>)

}
export default injectSheet(styles)(Paper)