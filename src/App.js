import React from 'react';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import Kanban from './screens/kanban/kanban.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
 
  return (
    
      <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/about">
            <Kanban />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
   
  );
}

export default App;
