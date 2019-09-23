import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from '../src/components/Form';
import Home from "../src/components/Home";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

