import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingPage from "./components/Landing/LandingPage";
import SearchResults from "./components/Search/SearchResults";
import ProfileResults from "./components/Profile/ProfileResults";
import MovieResult from "./components/Movies/MovieResult";
import ProfileResult from "./components/Profile/ProfileResult";
import Settings from "./components/Profile/Settings";
import MyProfile from "./components/Profile/MyProfile";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

function App() {
  return (
    <Router>
      <Navigation />
      <Container fluid style={{ paddingTop: "30px" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search-results" component={SearchResults} />
          <Route exact path="/profile-results" component={ProfileResults} />
          <Route exact path="/movie-result" component={MovieResult} />
          <Route exact path="/profile-result" component={ProfileResult} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/">
            <h1>Sorry, this page doesn't exist!</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
