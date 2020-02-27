import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import Kanban from './screens/kanban/kanban.js'
import Navbar from './components/navbar/navbar.jsx'
import SberLayout from './screens/sberLayout/sberLayout.jsx'
import Sidebar from './components/sidebar/sidebar.js'
import ClassNames from 'classnames';
import rootReducer from './store/kanban/reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/kanban/saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createUseStyles, useTheme, ThemeProvider } from 'react-jss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)
// Using `theme` function is better when you have many theme dependant styles.
let useStyles = createUseStyles(theme => ({
  root: {
    display: 'grid',
    'grid-template-columns': '1fr 7fr',
    'grid-template-rows': '90px 1fr',
    'grid-template-areas': '"navbar navbar " "sidebar content " "sidebar content "',
    height: '100vh',
  },
  navbar: {
    gridArea: 'navbar',
    border: '1px solid #c1c1c1',
  },
  sidebar: {
    gridArea: 'sidebar',
    border: '1px solid #c1c1c1',
  },
  content: {
    gridArea: 'content',
    border: '1px solid #c1c1c1',
    overflowY: 'scroll',

  },
  test:{
    backgroundColor:'#999999'
  }
  
}))

// Using function values might be better if you have only few theme dependant styles
// and also props or state is used for other values.

let App = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles({...props, theme})
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className={ClassNames(classes.root)}>
            <div className={ClassNames(classes.navbar)}>
              <Navbar />
            </div>
            <div className={ClassNames(classes.sidebar)}>
              <Sidebar />
            </div>
            <Router>
              <Switch>
                <Route path="/about">
                  <div className={ClassNames(classes.content)}><Kanban /></div>
                </Route>
                <Route path="/sberLayout">
                  <div className={ClassNames(classes.content)}><SberLayout /></div>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
//sagaMiddleware.run(rootSaga)
export default App;


