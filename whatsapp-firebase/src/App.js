import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';

import {BrowserRouter  as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <div className = "app__body">
        <Router >
          <Sidebar />
          <Switch>
          <Route path = "/rooms/:roomId">
             <Chat />

            </Route>
            <Route path = "/">
             <Chat />
            </Route>
            
            
         
          </Switch>
         
        </Router>
        

      </div>
    </div>
  );
}

export default App;
