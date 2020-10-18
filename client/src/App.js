import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { Container } from "react-bootstrap";
import LandingPage from "./components/Landing/LandingPage";
import SearchResultsPage from "./components/Search/SearchResultsPage";
import MoviePage from "./components/Movies/MoviePage";
import ProfilePage from "./components/Profile/ProfilePage";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Navigation />
        <Container
          fluid
          className="d-flex flex-column align-items-center"
          style={{ paddingTop: "30px" }}
        >
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/search" component={SearchResultsPage} />
            <Route exact path="/movie/:id" component={MoviePage} />
            <Route path="/profile/" component={ProfilePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/">
              <h1>Sorry, this page doesn't exist!</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </AppContextProvider>
  );
}

export default App;
