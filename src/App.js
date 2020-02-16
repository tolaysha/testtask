import React from 'react';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import Kanban from './screens/kanban/kanban.jsx'
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

const styles = {
  root: {
    border: '1px solid',
    display: 'grid',
    'grid-template-columns': '1fr 7fr',
    'grid-template-rows': '1fr 7fr',
    'grid-template-areas': '"navbar navbar " "sidebar content " "sidebar content "',
  },
  navbar: {
    gridArea: 'navbar',
    border: '1px solid',
  },
  sidebar: {
    gridArea: 'sidebar',
    border: '1px solid',
  },
  content: {
    gridArea: 'content',
    border: '1px solid',
  }
}
let  App=({classes})=> {

  return (

    <div className="App">


      <div className={ClassNames(classes.root)}>
        <div className={ClassNames(classes.navbar)}>navbar</div>
        <div className={ClassNames(classes.sidebar)}>sidebar</div>
        <Router>
          <Switch>
            <Route path="/about">
              <div className={ClassNames(classes.content)}><Kanban /></div>
            </Route>
          </Switch>
        </Router>
      </div>


    </div>

  );
}
export default injectSheet(styles)(App)


