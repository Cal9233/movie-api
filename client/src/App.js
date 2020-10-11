import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SearchResults from './components/SearchResults';
import ProfileResults from './components/ProfileResults';
import MovieResult from './components/MovieResult';
import ProfileResult from './components/ProfileResult';
import Settings from './components/Settings';
import MyProfile from './components/MyProfile';

function App() {
  return (
<Router>
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/search-results" component={SearchResults}/>
    <Route exact path="/profile-results" component={ProfileResults}/>
    <Route exact path="/movie-result" component={MovieResult}/>
    <Route exact path="/profile-result" component={ProfileResult}/>
    <Route exact path="/settings" component={Settings}/>
    <Route exact path="/myprofile" component={MyProfile}/>
  </Switch>
</Router>
  );
}

export default App;
