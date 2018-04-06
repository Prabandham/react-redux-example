import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/"><h1 className="App-title">Home</h1></Link>
          </header>

          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
