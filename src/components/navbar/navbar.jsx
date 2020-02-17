import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  ul:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  SberProfi: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '36px',
    lineHeight: '42px',
    alignItems: 'flex-end',
    color: '#000000',
    listStyleType: 'none',
  },
  SberWorks:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    listStyleType: 'none',
    color: '#5E788A',
  }
}
let Sidebar = ({ classes }) => {
  return <div className={ClassNames(classes.root)}>
  
      <ul className={ClassNames(classes.ul)}>
        <li className={ClassNames(classes.SberProfi)}>SberProfi</li>
        <li className={ClassNames(classes.SberWorks)}>SberWorks</li>
      </ul>

  </div>

}
export default injectSheet(styles)(Sidebar)