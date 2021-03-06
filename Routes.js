import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// View Components
import Home from './components/Home';
import Signup from './components/Signup'
import Signin from './components/Signin'




// Functional Components

const Routes = () => {

 


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        
        
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;