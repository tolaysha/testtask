import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import Kanban from './screens/kanban/kanban.js'
import Sidebar from './components/sidebar/sidebar.jsx'
import ClassNames from 'classnames';
import injectSheet from 'react-jss';
import rootReducer from './store/kanban/reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/kanban/saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)
const styles = {
  root: {
    border: '1px solid #c1c1c1',
    display: 'grid',
    'grid-template-columns': '1fr 7fr',
    'grid-template-rows': '1fr 7fr',
    'grid-template-areas': '"navbar navbar " "sidebar content " "sidebar content "',
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
  }
}
let App = ({ classes }) => {

  return (
    <Provider store={store}>
      <div className="App">


        <div className={ClassNames(classes.root)}>
          <div className={ClassNames(classes.navbar)}>navbar</div>
          <div className={ClassNames(classes.sidebar)}>
            <Sidebar />
          </div>
          <Router>
            <Switch>
              <Route path="/about">
                <div className={ClassNames(classes.content)}><Kanban /></div>
              </Route>
            </Switch>
          </Router>
        </div>


      </div>
    </Provider>

  );
}
export default injectSheet(styles)(App)


