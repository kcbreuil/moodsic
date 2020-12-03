import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';
import { AppContextProvider } from './context/AppContext';
import Profile from './pages/Profile';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
