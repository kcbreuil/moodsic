import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SongStream from './pages/SongStream';

import './App.css';
import { AppContextProvider } from './context/AppContext';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Profile} />
          <Route exact path="/songs" component={SongStream} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
