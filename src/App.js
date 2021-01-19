import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, AlertCom } from './components';
import { About, Home, Profile} from './pages';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container pt-4">
        <AlertCom alert={{text: 'Test alert'}}/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/profile/:name'  component={Profile}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
