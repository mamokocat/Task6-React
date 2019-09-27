import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import SearchResult from './SearchResult';
import GifPage from './GifPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={SearchResult} />
      <Route path="/gif" component={GifPage} />
    </Switch>
  </main>
);

export default Main;