import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import HomeApp from './HomeBundle/HomeApp';
import './index.scss';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={HomeApp}/>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))